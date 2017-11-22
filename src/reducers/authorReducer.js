import * as types from '../actions/actionTypes';

export default function authorReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_AUTHOR:
      return [...state, Object.assign({}, action.author)];

    default:
      return state;
  }
}
