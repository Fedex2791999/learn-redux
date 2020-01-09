import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import listView from './listView';
export default combineReducers({
  counter:counterReducer,
  listView: listView
});