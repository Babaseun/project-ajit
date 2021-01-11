import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import Auth from '../../Auth';
import { useHistory } from 'react-router-dom';
import './mapStyle.scss';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Hamburger from '../Hamburger/Hamburger';
import SideBar from '../SideBar/SideBar';
import axios from 'axios';

require('dotenv').config({ path: __dirname + '/../.env' });
const MainMap = () => {
  const [selected, setSelected] = useState(null);
  const [navClicked, setNavClicked] = useState(false);
  const [display, setDisplay] = useState('');
  const [imageData, setImageData] = useState([]);

  const history = useHistory();

  const returnImageUrls = async () => {

    const images = await axios.get('/api/images');
    const coords = await axios.get('/api/coords');
    const products = await axios.get('/api/products');

    Promise.all([images, coords, products]).then((res) => {
      const imgUrls = res[0].data;
      const coordinates = res[1].data;
      const productData = res[2].data;

      const map = new Map();

      for (let i of imgUrls) {
        const key = [i['publicIds']].toString().slice(4);

        map.set(
          key,

          {
            imageUrl: i['imageUrls'],
          }
        );
      }
      for (let i = 0; i < productData.length; i++) {
        const data = map.get(productData[i]['image_id']);
        data['description'] = productData[i]['description'];
        data['price'] = productData[i]['price'];
      }
      for (let i = 0; i < coordinates.length; i++) {
        const data = map.get(coordinates[i]['image_id']);
        data['lat'] = coordinates[i]['lat'];
        data['lng'] = coordinates[i]['lng'];
      }
      const arrayOfData = [];
      for (let [key, value] of map.entries()) {
        arrayOfData.push({ id: key, values: value });
      }

      setImageData([...arrayOfData]);
    });
  };

  const navMenuClicked = () => {
    navClicked ? setNavClicked(false) : setNavClicked(true);
    display === '' ? setDisplay('display') : setDisplay('');
  };
  useEffect(() => {
    returnImageUrls();
  }, []);
  const logout = () => {
    localStorage.removeItem('x-access-token');
    history.push('/login');
  };

  const libraries = ['places'];
  const mapContainerStyle = {
    height: '100%',
    width: '100%',
  };
  const center = {
    lat: 6.6194,
    lng: 3.5105,
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  return (
    <div>
      {navClicked ? <NavigationMenu backArrow={navMenuClicked} /> : null}
      <div className="map">
        <div className="map__columns">
          <div className="map__item">
            {Auth.getLoggedInStatus() ? (
              <Hamburger display={display} navMenuClicked={navMenuClicked} />
            ) : null}
            {Auth.getLoggedInStatus() ? null : <SideBar />}
          </div>
        </div>
        <div className="map__columns">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
          >
            {Auth.getLoggedInStatus() &&
              imageData.map((marker) => (
                <Marker
                  key={marker.id}
                  position={{
                    lat: marker.values.lat,
                    lng: marker.values.lng,
                  }}
                  icon={{
                    url: marker.values.imageUrl,
                    scaledSize: new window.google.maps.Size(100, 100),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                  onClick={() => setSelected(marker)}
                />
              ))}

            {selected ? (
              <InfoWindow
                position={{
                  lat: selected.values.lat,
                  lng: selected.values.lng,
                }}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h1> Description : {selected.values.description}</h1>
                  <h1>Price :{selected.values.price}</h1>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
        {localStorage.getItem('x-access-token') ? (
          <button
            style={{ position: 'absolute', top: '0', left: '80%' }}
            onClick={logout}
            className="btn btn-primary"
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MainMap;
