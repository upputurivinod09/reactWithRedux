import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import * as mockCourseData from '../api/mockCourseData';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  describe('Async Actions', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('should create BEGIN_AJAXX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
      // Here's an exampe call to nock.
      //nock('http://example.com/')
      //.get('courses')
      // .reply(200, {body: {course: [{id: 1, fileName: 'Cory', lastName: 'House'}]}});

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
      ];

      const store = mockStore({courses: []}, expectedActions);
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
    });
  });
});
