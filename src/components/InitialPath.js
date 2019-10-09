import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoading ? (
        <CircularProgress />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location},
          }}
        />
      )
    }
  />
);
