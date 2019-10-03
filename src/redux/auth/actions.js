import firebase from 'firebase';
import axios from 'axios';

import {
  AUTH_USER_STARTED,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  SIGN_OUT_USER,
} from './actionTypes';

import {auth} from '../../config/firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Axios default
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// intercepts network requests to the api and
// attaches the current itToken to the Authorization header
const attachIdTokenToRequest = () => {
  axios.interceptors.request.use(
    async config => {
      config.headers.token = await auth.currentUser.getIdToken();
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
};

const authUserStarted = () => {
  return {
    type: AUTH_USER_STARTED,
  };
};

const authUserSuccess = user => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: {user},
  };
};

const authUserFailure = error => ({
  type: AUTH_USER_FAILURE,
  payload: error.message,
});

export const verifyAuth = () => {
  return async dispatch => {
    dispatch(authUserStarted());

    auth.onAuthStateChanged(user => {
      if (user) {
        const {uid, email, displayName, photoURL, emailVerified} = user;
        attachIdTokenToRequest(); //Attach idToken
        dispatch(
          authUserSuccess({uid, email, displayName, photoURL, emailVerified})
        );
      } else {
        dispatch(authUserFailure({message: 'No user is logged in.'}));
      }
    });
  };
};

export const signInUser = user => {
  return dispatch => {
    dispatch(authUserStarted());

    auth
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        const {user} = result;
        const {uid, email, displayName, photoURL, emailVerified} = user;
        attachIdTokenToRequest(); //Attach idToken
        dispatch(
          authUserSuccess({uid, email, displayName, photoURL, emailVerified})
        );
      })
      .catch(error => dispatch(authUserFailure(error)));
  };
};

export const signOutUser = () => {
  return dispatch => {
    // Sign out of Firebase
    auth.signOut().then(() => dispatch({type: SIGN_OUT_USER}));
  };
};
