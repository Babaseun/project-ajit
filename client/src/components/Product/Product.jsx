import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import '../Login/login-style.scss';
import axios from 'axios';

function Product() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [errs, setErrors] = React.useState([]);
  const [role, setRole] = React.useState('');
  const [successMsg, setMsg] = React.useState('');
  const logout = () => {
    localStorage.removeItem('x-access-token');
    history.push('/login');
  };
  const onSubmitProduct = async (data) => {
    const imageID = uuid();
    const productID = uuid();
    setMsg('');
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
      },
    };
    const { productImage, price, description, lng, lat } = data;
    const base64Img = await convertToBase64(productImage);
    const firstResult = await axios.post(
      'http://localhost:4001/api/products',
      { price, description, imageId: imageID },
      config
    );
    const secondResult = await axios.post(
      'http://localhost:4001/api/coords',
      { coords: { lng, lat, imageId: imageID, productId: productID } },
      config
    );
    base64Img.forEach(async (img) => {
      const thirdResult = await axios.post(
        'http://localhost:4001/api/upload',
        {
          file: img,
          imageId: imageID,
        },
        config
      );
      console.log(thirdResult);
    });
    Promise.all([firstResult, secondResult])
      .then((res) => {
        setMsg('Saved successfully');
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const convertToBase64 = async (files) => {
    const results = [];
    for (let i = 0; i < files.length; i++) {
      const data = await getBase64(files[i]);
      results.push(data);
    }
    return results;
  };
  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
      },
    };
    axios
      .get('http://localhost:4001/api/user', config)
      .then((res) => {
        setRole(res.data.role);
        if (role === undefined && role === 'customer') {
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) history.push('/register');
      });
  }, [history, role]);
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
                  multiple
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
