import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Login/login-style.scss';
import Auth from '../../Auth';
import axios from 'axios';

function Register() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [errs, setErrors] = React.useState([]);
  const [role, setRole] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:4001/register', data);
      Auth.onAuthenticated();
      localStorage.setItem('x-access-token', res.data.token);
      setErrors([]);
      const config = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
        },
      };
      axios.get('http://localhost:4001/api/user', config).then((res) => {
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
    } catch (error) {
      setErrors([...error.response.data]);
    }
  };

  return (
    <div className="login__container">
      <div className="login-input-group">
        <div className="login-input">
          <h1 className="login__text">Register Here</h1>
          {errs ? (
            <ul>
              {errs.map((err, index) => (
                <li key={index}>{err.msg}</li>
              ))}
            </ul>
          ) : null}
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="input-field">
              <label>FirstName</label>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.firstName && (
                  <div className="text-danger">
                    Please enter your firstName.
                  </div>
                )}
              </div>
            </div>
            <div className="input-field">
              <label>LastName</label>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.lastName && (
                  <div className="text-danger">Please enter your lastname.</div>
                )}
              </div>
            </div>
            <div className="input-field">
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <div className="text-danger">Please enter your email.</div>
                )}
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
                {errors.password && 'Please enter your password.'}
              </div>
            </div>
            <div className="input-field">
              <label>ConfirmPassword</label>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  className="input form-control"
                  ref={register({ required: true })}
                />
                {errors.confirmPassword && 'Please enter your password.'}
              </div>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="role"
                  defaultChecked
                  className="form-check-input"
                  ref={register()}
                  value="customer"
                />
                Are you registering as a customer
              </label>
            </div>
            <h1>OR</h1>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  name="role"
                  className="form-check-input"
                  ref={register()}
                  value="business"
                />
                Are you registering as a business
              </label>
            </div>
            <button className="btn btn-success" type="submit">
              Register
            </button>
            <small className="text-muted m-4">
              Already registered <Link to="/login">Click Here to login</Link>
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

export default Register;
