import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('Should add course when action passed CREATE_COURSE_SUCCESS', () => {

    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('Should update course when action passed UPDATE_COURSE_SUCCESS', () => {

    const initialState = [
      {id:'A', title: 'A'},
      {id:'B', title: 'B'},
      {id:'C', title: 'C'}
    ];

    const newCourse = {id: 'A', title: 'C'};

    const action = actions.updateCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == newCourse.id);

    expect(updatedCourse.title).toEqual('C');
  });

  it('Should load courses when action passed LOAD_COURSES_SUCCESS', () => {

    const initialState = [
      {id:'A', title: 'A'},
      {id:'B', title: 'B'},
      {id:'C', title: 'C'}
    ];

    const action = actions.loadCoursesSuccess(initialState);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
  });
});

