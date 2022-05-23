import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route exact path={props.path}>
      {() =>
        props.loggedInProtected !== 'start' ? (
          props.loggedInProtected ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          ''
        )
      }
    </Route>
  );
}

export default ProtectedRoute;
