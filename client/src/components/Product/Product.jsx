import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import '../Login/login-style.scss';
import axios from 'axios';

function Product() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [errs] = React.useState([]);
  const [successMsg, setMsg] = React.useState('');
  const [imageID, setImageID] = React.useState(uuid());

  const logout = () => {
    localStorage.removeItem('x-access-token');
    history.push('/login');
  };
  const onSubmitProduct = async (data) => {
    setMsg('');
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
      },
    };
    const { productImage, price, description, lng, lat } = data;
    await getBase64(productImage[0]);

    const firstResult = await axios.post(
      '/api/products',
      { price, description, image_id: imageID },
      config
    );
    const secondResult = await axios.post(
      '/api/coords',
      { lng: Number(lng), lat: Number(lat), image_id: imageID },
      config
    );

    Promise.all([firstResult, secondResult])
      .then((res) => {
        setMsg('Saved successfully');
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  };

  const getBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };
  const uploadImage = async (base64String) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
      },
    };
    await axios.post(
      '/api/upload',
      {
        file: base64String,
        image_id: imageID,
      },
      config
    );
    setImageID(uuid());
  };
  return (
    <div className="login__container">
      <div className="login-input-group">
        <div className="login-input">
          <h1 className="login__text">Add Product</h1>
          {successMsg}

          {errs ? (
            <ul>
              {errs.map((err, index) => (
                <li key={index}>{err.msg}</li>
              ))}
            </ul>
          ) : null}
          <form onSubmit={handleSubmit(onSubmitProduct)} method="POST">
            <div className="input-field">
              <label className="mb-3">Product Image</label>
              <div className="form-group">
                <input
                  type="file"
                  name="productImage"
                  className="form-control-file"
                  ref={register({ required: true })}
                />
                {errors.productImage && (
                  <div className="text-danger">
                    Please enter product image .
                  </div>
                )}
              </div>
            </div>
            <div className="input-field mt-3">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  cols="5"
                  ref={register({ required: true })}
                  name="description"
                ></textarea>
              </div>

              {errors.description && (
                <div className="text-danger">Please enter description.</div>
              )}
            </div>

            <div className="input-field">
              <label>Price</label>
              <div className="form-group">
                <input
                  type="text"
                  name="price"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.price && (
                  <div className="text-danger">Please enter your price.</div>
                )}
              </div>
            </div>
            <div className="input-field">
              <label>Longitude</label>
              <div className="form-group">
                <input
                  type="text"
                  name="lng"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.price && (
                  <div className="text-danger">
                    Please enter your Longitude.
                  </div>
                )}
              </div>
            </div>
            <div className="input-field">
              <label>Latitude</label>
              <div className="form-group">
                <input
                  type="text"
                  name="lat"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.price && (
                  <div className="text-danger">Please enter your Latitude.</div>
                )}
              </div>
            </div>
            <button className="btn btn-success" type="submit">
              Save Product
            </button>
            <div className="input-field mt-3">
              <div className="form-group">
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="login__image-group">
        <img
          className="login__image"
          src="/images/undraw_online_payments_luau.svg"
          alt="login.png"
        />
      </div>
    </div>
  );
}

export default Product;
