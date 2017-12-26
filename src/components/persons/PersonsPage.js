import React,{PropTypes} from 'react';
import { Link, IndexLink , browserHistory } from 'react-router';
import PersonList from './PersonList';
import * as personActions from '../../actions/personActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PersonPage extends React.Component {

  redirectToAddPersonPage() {
    browserHistory.push("/addPerson");
  }

  render () {
    return (
      <div>
        <h1>Persons</h1>
        <input type="submit" value="Add Person" className="btn btn-primary" onClick={this.redirectToAddPersonPage}/>
        <PersonList persons={this.props.persons}/>
      </div>
    );
  }
}

PersonPage.propTypes = {
  actions: PropTypes.object.isRequired,
  persons: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    persons: state.persons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);
