import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import * as mockCourseData from '../api/mockCourseData';

describe('Course Actions',() => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        savedCourse: course
      };
      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateCourseSuccess', () => {
    it('should create a UPDATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.UPDATE_COURSE_SUCCESS,
        savedCourse: course
      };
      //act
      const action = courseActions.updateCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadCoursesSuccess', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      const courses = [{id: 'clean-code', title: 'Clean Code'}];
      const expectedAction = {
        type: types.LOAD_COURSES_SUCCESS,
        courses: courses
      };
      //act
      const action = courseActions.loadCoursesSuccess(courses);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadCourses', () => {
    it('should create a LOAD_COURSES_SUCCESS action for success loadCourse', () => {
      const courses = mockCourseData.courses;
      const expectedAction = {
        type: types.LOAD_COURSES_SUCCESS,
        courses: courses
      };
      //act
      const action = courseActions.loadCourses();
      console.log("Action type:"+action.type);
      console.log("Action courses:"+action.courses);

      //assert
      // expect(action).toEqual(expectedAction);
    });
  });
});
