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

/*
src/reducers/simpleReducer.js
*/

const INIT_STATE = {
  allSpots: [],
  spot: {},
  isLoading: false,
  isSaving: false,
  isDeleting: false,
  hasError: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_SPOTS_STARTED:
      return {...state, isLoading: true};

    case FETCH_SPOTS_SUCCESS:
      return {
        ...state,
        allSpots: action.payload,
        isLoading: false,
      };

    case FETCH_SPOTS_FAILURE:
      return {...state, isLoading: false, hasError: true};

    case CREATE_SPOT_STARTED:
      return {...state, isSaving: true};

    case CREATE_SPOT_SUCCESS:
      return {
        ...state,
        isSaving: false,
        hasError: false,
      };

    case CREATE_SPOT_FAILURE:
      return {...state, isSaving: false, hasError: true};

    case DELETE_SPOT_STARTED:
      return {...state, isDeleting: true};

    case DELETE_SPOT_SUCCESS:
      return {...state, isDeleting: false, hasError: false};

    case DELETE_SPOT_FAILURE:
      return {...state, isDeleting: false, hasError: true};

    default:
      return state;
  }
};
