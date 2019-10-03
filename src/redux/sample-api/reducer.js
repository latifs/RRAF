import {
  FETCH_API_SAMPLE_STARTED,
  FETCH_API_SAMPLE_SUCCESS,
  FETCH_API_SAMPLE_FAILURE,
} from './actionTypes';

/*
src/reducers/simpleReducer.js
*/

const INIT_STATE = {
  sample_data: '',
  isLoading: false,
  hasError: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_API_SAMPLE_STARTED:
      return {...state, isLoading: true};

    case FETCH_API_SAMPLE_SUCCESS:
      return {
        ...state,
        sample_data: action.payload,
        isLoading: false,
      };

    case FETCH_API_SAMPLE_FAILURE:
      return {...state, isLoading: false, hasError: true};

    default:
      return state;
  }
};
