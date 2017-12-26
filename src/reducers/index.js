import {combineReducers} from 'redux';
import persons from './PersonsReducer';
import person from './ManagePersonReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ persons, person, ajaxCallsInProgress });

export default rootReducer;
