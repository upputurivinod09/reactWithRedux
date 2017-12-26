import * as types from './actionTypes';
import PersonApi from "../api/mockPersonApi";
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPersonsSuccess(persons) {
  return {
    type: types.LOAD_PERSONS_SUCCESS, persons
  };
}

export function savePersonSuccess(savedPerson) {
  return {
    type: types.SAVE_PERSON_SUCCESS, savedPerson
  };
}

export function loadPersons() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.getAllPersons().then(persons => {
      dispatch(loadPersonsSuccess(persons));
    }).catch(error => {
      throw (error);
    });
  };
}

export function savePerson(person) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.savePerson(person).then(savedPerson => {
      dispatch(savePersonSuccess(savedPerson));
    }).catch(error => {
      throw (error);
    });
  };
}
