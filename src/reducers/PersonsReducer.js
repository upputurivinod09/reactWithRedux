import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PersonReducer(state = initialState.persons, action) {
  switch(action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      return action.persons;

    case types.SAVE_PERSON_SUCCESS:
      let newState = [...state, Object.assign({}, action.savedPerson)];
      return newState;

    default:
      return state;
  }
}
