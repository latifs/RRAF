import React from 'react';
import {connect} from 'react-redux';

import {Redirect, Route, Switch} from 'react-router-dom';

import InitialPath from './InitialPath';

// Actions
import {verifyAuth} from './../redux/auth/actions';

import MainRoute from '../routes';
import LoginLayout from './Login/';
import Error404 from './Error/';
import SnackBar from './SnackBar/';

// Layouts
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';

import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  mainLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
  },
  progress: {
    position: 'absolute',
    left: '50%',
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.verifyAuth();
  }

  render() {
    const {location, match, isAuthenticated, isLoading, classes} = this.props;

    if (location.pathname === '/app' || location.pathname === '/') {
      return <Redirect to="/app/home" />;
    }
    return (
      <div className={classes.mainLayout}>
        <CssBaseline />
        <Navbar />
        <SnackBar />
        <div className={classes.mainContent}>
          {isLoading ? (
            <CircularProgress className={classes.progress} />
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
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  const {isAuthenticated, isLoading} = authUser;
  return {isAuthenticated, isLoading};
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {verifyAuth}
  )(App)
);
