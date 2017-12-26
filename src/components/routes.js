import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from '../components/home/HomePage';
import ManagePersonPage from './persons/ManagePersonPage'; //eslint-disable-line import/no-named-as-default
import PersonsPage from './persons/PersonsPage';

export default (
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
      <Route path="persons" components={PersonsPage}/>
      <Route path="addPerson" components={ManagePersonPage}/>
      <Route path="person/:id" components={ManagePersonPage}/>
		</Route>
	);
