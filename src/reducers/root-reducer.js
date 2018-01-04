import { combineReducers } from 'redux';
import housesReducer from './housesReducer';

const rootReducer = combineReducers({
  housesData: housesReducer
});


export default rootReducer;
