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
import dotenv from 'dotenv';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
dotenv.config();
const MainMap = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [navClicked, setNavClicked] = useState(false);
  const [display, setDisplay] = useState('');
  const [role, setRole] = useState('');
  const [imageIDs, setImageIDs] = useState();
  const history = useHistory();

  const returnImageIds = async () => {
    const array = [];
    const imgIDS = await axios.get('/api/images');
    console.log();
    setImageIDs(imgIDS.data);
    const secondResult = await axios.get('/api/coords');
  };

  const navMenuClicked = () => {
    navClicked ? setNavClicked(false) : setNavClicked(true);
    display === '' ? setDisplay('display') : setDisplay('');
  };
  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
      },
    };
    axios.get('/api/user', config).then((res) => {
      setRole(res.data.role);
      if (role === 'customer') {
        history.push('/map');
      }
      if (role === 'business') {
        history.push('/product');
      } else {
        history.push('/');
      }
    });
    returnImageIds();
  }, [role, history]);
  const logout = () => {
    localStorage.removeItem('x-access-token');
    history.push('/login');
  };
  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);
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

  <Image
    key={'2'}
    cloudName="dtof2ye7q"
    publicId={'dev/9053bc8d-5df0-4993-8765-9387978a8c77'}
    width={'100'}
    crop={'scale'}
  />;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.APP_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  console.log(role);
  return (
    <div>
      {/* {imageIds &&
        imageIds.map((ids, i) => (
          <Image
            key={i}
            cloudName="dtof2ye7q"
            publicId={'dev/9053bc8d-5df0-4993-8765-9387978a8c77'}
            width={'100'}
            crop={'scale'}
          />
        ))} */}

      {navClicked ? <NavigationMenu backArrow={navMenuClicked} /> : null}
      <div className="map">
        <div className="map__columns">
          <div className="map__item">
            {role ? (
              <Hamburger display={display} navMenuClicked={navMenuClicked} />
            ) : null}
            {role ? null : <SideBar />}
          </div>
        </div>
        <div className="map__columns">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onClick={onMapClick}
          >
            {Auth.getLoggedInStatus()
              ? markers.map((marker) => (
                  <Marker
                    key={marker.time.toISOString()}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                    // icon={{
                    //   url: data,
                    //   scaledSize: new window.google.maps.Size(30, 30),
                    //   origin: new window.google.maps.Point(0, 0),
                    //   anchor: new window.google.maps.Point(15, 15),
                    // }}
                  />
                ))
              : null}

            {selected ? (
              <InfoWindow
                position={{
                  lat: Number(selected.lat),
                  lng: Number(selected.lng),
                }}
                onCloseClick={() => setSelected(null)}
              >
                <div>HI</div>
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
