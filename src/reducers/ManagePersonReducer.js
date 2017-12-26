import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ManagePersonReducer(state = initialState.person, action) {
  switch(action.type) {
    case types.UPDATE_PERSON_SUCCESS:
      return action.savedPerson;

    default:
      return state;
  }
}
