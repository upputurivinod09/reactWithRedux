import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author formatted for use in a dropdown', () => {
      const authors = [
        {id:'cory-house', firstName: 'Cory', lastName: 'House'},
        {id:'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
