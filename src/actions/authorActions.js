import * as types from './actionTypes';

export function createAuthor(author) {
  return { type: types.CREATE_AUTHOR, author};
}
