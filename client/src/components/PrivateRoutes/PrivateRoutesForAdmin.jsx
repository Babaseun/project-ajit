import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../Auth';

const PrivateRoutesForAdmin = (props) => (
  <Route
    path={props.path}
    render={(data) =>
      Auth.getLoggedInStatus() ? (
        <props.component {...data}></props.component>
      ) : (
        <Redirect to={{ pathname: '/admin-login' }} />
      )
    }
  />
);

export default PrivateRoutesForAdmin;
