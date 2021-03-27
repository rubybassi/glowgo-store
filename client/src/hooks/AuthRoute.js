import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Check if the user is logged in
export function AuthenticatedRoute({ component: Component, ...rest }) {

  // Gets auth state
  const authUser = () => {
    const credentials = JSON.parse(localStorage.getItem("user"));
    if (!credentials) return false;
    if (credentials.token) return true;
    // add library to compare token date
  } 

  return (
    <Route
      {...rest}
      render={props =>
        authUser()
          ? <Component {...props} />
          : <Redirect
              to='/login'
            />}
    />
  );
}