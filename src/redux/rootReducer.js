import {combineReducers} from 'redux';
import spots from './spots/reducer';
import authUser from './auth/reducer';
import sampleApi from './sample-api/reducer';

export default combineReducers({
  authUser,
  spots,
  sampleApi,
});
