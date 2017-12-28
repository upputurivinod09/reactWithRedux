import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCourseSuccess(savedCourse) {
  return {
    type: types.UPDATE_COURSE_SUCCESS, savedCourse
  };
}

export function createCourseSuccess(savedCourse) {
  return {
    type: types.CREATE_COURSE_SUCCESS, savedCourse
  };
}


export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

export function loadCourseByIdSuccess(course) {
  return {
    type: types.LOAD_COURSE_BY_ID_SUCCESS, course
  };
}


export function loadCourseById(courseId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.loadCourseById(courseId).then(course => {
      dispatch(loadCourseByIdSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
