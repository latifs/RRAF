import axios from 'axios';
import {
  FETCH_API_SAMPLE_STARTED,
  FETCH_API_SAMPLE_SUCCESS,
  FETCH_API_SAMPLE_FAILURE,
} from './actionTypes';

const apiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}`;

/////////////////////////
// FETCH
/////////////////////////
const fetchApiSampleStarted = () => {
  return {
    type: FETCH_API_SAMPLE_STARTED,
  };
};

const fetchApiSampleSuccess = data => {
  return {
    type: FETCH_API_SAMPLE_SUCCESS,
    payload: data,
  };
};

const fetchApiSampleFailure = error => {
  return {
    type: FETCH_API_SAMPLE_FAILURE,
    payload: error,
  };
};

export const fetchApiSample = () => async dispatch => {
  if (apiEndpoint) {
    dispatch(fetchApiSampleStarted());

    axios
      .get(`${apiEndpoint}/users/1`)
      .then(res => {
        dispatch(fetchApiSampleSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchApiSampleFailure(error));
      });
  }
};
