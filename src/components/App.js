import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {Redirect, Route, Switch} from 'react-router-dom';

// Actions
import {verifyAuth} from './../redux/auth/actions';

import Navbar from './Navbar';
import MainRoute from '../routes';
import LoginLayout from './Login/';
import Error404 from './Error/';
import FixedToast from './FixedToast';

import {Spinner} from 'reactstrap';

const InitialPath = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoading ? (
        <Spinner color="secondary" type="grow" />
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

class App extends Component {
  componentDidMount() {
    this.props.verifyAuth();
  }

  render() {
    const {location, match, isAuthenticated, isLoading} = this.props;

    if (location.pathname === '/app' || location.pathname === '/') {
      return <Redirect to="/app/home" />;
    }
    return (
      <Fragment>
        <Navbar />
        <FixedToast />
        {isLoading ? (
          <Spinner color="secondary" type="grow" />
        ) : (
          <Switch>
            <InitialPath
              path={`${match.url}app`}
              isAuthenticated={isAuthenticated}
              component={MainRoute}
            />
            <Route path={`/login`} component={LoginLayout} />
            <Route path={`/error`} component={Error404} />
            <Redirect to="/error" />
          </Switch>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  const {isAuthenticated, isLoading} = authUser;
  return {isAuthenticated, isLoading};
};

export default connect(
  mapStateToProps,
  {verifyAuth}
)(App);
