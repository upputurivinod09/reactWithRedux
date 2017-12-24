import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    course: {},
    saving: saving,
    allAuthors: ['Cory House'],
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

function setupMount() {
  const props = {
    course: {},
    saving: false,
    allAuthors: [],
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return mount(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1',() => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('Author field is displaying authors',() => {
    const wrapper = setupMount();
    const Author = wrapper.find('SelectInput');
    expect(Author.props().name).toBe('authorId');
    Author.simulate('change',{target: { value : 'cory-house'}});
    // expect(Author.props().value).toBe('cory-house');
  });

  it('save botton is labled "Save when not saving"',() => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });


  it('save botton is labled "Saving..." when saving',() => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });


});


