import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './login-style.scss';
import Auth from '../../Auth';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AdminLogin() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [err, setError] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('/login', data);
      Auth.onAuthenticated();

      localStorage.setItem('x-access-token', res.data.token);
      history.push('/products');
      setError('');
    } catch (error) {
      const [firstErr] = error.response.data;
      console.log(firstErr.msg);
      setError(firstErr.msg);
    }
  };

  return (
    <div className="login__container">
      <div className="login-input-group">
        <div className="login-input">
          <h1 className="login__text">ADMIN LOGIN</h1>
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="input-field">
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.email && 'Please enter your email.'}
                {err ? <div>{err}</div> : null}
              </div>
            </div>
            <div className="input-field">
              <label>Password</label>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.email && 'Please enter your password.'}
              </div>
            </div>

            <button className="btn btn-success" type="submit">
              Login
            </button>
            <small className="text-muted m-4">
              Not yet registered{' '}
              <Link to="/admin-register">Click Here to register</Link>
            </small>
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

export default AdminLogin;