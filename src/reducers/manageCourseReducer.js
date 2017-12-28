import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.course, action) {
  switch(action.type) {
    case types.LOAD_COURSE_BY_ID_SUCCESS:
      return action.course;

    default:
      return state;
  }
}
