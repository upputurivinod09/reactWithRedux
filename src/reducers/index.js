import {combineReducers} from 'redux';
import courses from './courseReducer';
import course from './manageCourseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ courses, course, authors, ajaxCallsInProgress });

export default rootReducer;
