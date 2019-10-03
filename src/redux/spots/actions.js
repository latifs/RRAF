import {db} from '../../config/firebase';

import {
  FETCH_SPOTS_STARTED,
  FETCH_SPOTS_SUCCESS,
  FETCH_SPOTS_FAILURE,
  // FETCH_SPOT_STARTED,
  // FETCH_SPOT_SUCCESS,
  // FETCH_SPOT_FAILURE,
  // UPDATE_SPOT_STARTED,
  // UPDATE_SPOT_SUCCESS,
  // UPDATE_SPOT_FAILURE,
  CREATE_SPOT_STARTED,
  CREATE_SPOT_SUCCESS,
  CREATE_SPOT_FAILURE,
  DELETE_SPOT_STARTED,
  DELETE_SPOT_SUCCESS,
  DELETE_SPOT_FAILURE,
} from './actionTypes';

/////////////////////////
// DELETE
/////////////////////////
const deleteSpotStarted = () => {
  return {
    type: DELETE_SPOT_STARTED,
  };
};

const deleteSpotSuccess = spot => {
  return {
    type: DELETE_SPOT_SUCCESS,
    payload: spot,
  };
};

const deleteSpotFailure = error => {
  return {
    type: DELETE_SPOT_FAILURE,
    payload: error,
  };
};

export const deleteSpot = spot => async dispatch => {
  dispatch(deleteSpotStarted());

  db.collection('spots')
    .doc(spot)
    .delete()
    .then(function() {
      dispatch(deleteSpotSuccess(spot));
    })
    .catch(function(error) {
      dispatch(deleteSpotFailure(error));
    });
};

/////////////////////////
// CREATE
/////////////////////////
const createSpotStarted = () => {
  return {
    type: CREATE_SPOT_STARTED,
  };
};

const createSpotSuccess = spot => {
  return {
    type: CREATE_SPOT_SUCCESS,
    payload: spot,
  };
};

const createSpotFailure = error => {
  return {
    type: CREATE_SPOT_FAILURE,
    payload: error,
  };
};

export const createSpot = edits => async dispatch => {
  dispatch(createSpotStarted());

  db.collection('spots')
    .add({
      name: edits.name,
      description: edits.description,
    })
    .then(function(docRef) {
      dispatch(createSpotSuccess(docRef));
    })
    .catch(function(error) {
      dispatch(createSpotFailure(error));
    });
};

/////////////////////////
// FETCH
/////////////////////////
const fetchSpotsStarted = () => {
  return {
    type: FETCH_SPOTS_STARTED,
  };
};

const fetchSpotsSuccess = spots => {
  return {
    type: FETCH_SPOTS_SUCCESS,
    payload: spots,
  };
};

const fetchSpotsFailure = error => {
  return {
    type: FETCH_SPOTS_FAILURE,
    payload: error,
  };
};

export const fetchSpots = () => async dispatch => {
  dispatch(fetchSpotsStarted());

  db.collection('spots').onSnapshot(
    querySnapshot => {
      let docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      dispatch(fetchSpotsSuccess(docs));
    },
    error => {
      dispatch(fetchSpotsFailure(error));
    }
  );
};
