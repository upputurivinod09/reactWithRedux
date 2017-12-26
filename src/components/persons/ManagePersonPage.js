import React, {PropTypes} from 'react';
import PersonForm from "./PersonForm";
import {connect} from 'react-redux';
import * as personActions from '../../actions/personActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManagePersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      person: Object.assign({}, this.props.person),
      errors: {},
      saving: false
    };

    this.onSave = this.onSave.bind(this);
    this.updatePersonState = this.updatePersonState.bind(this);
    this.redirectToPeronsPage = this.redirectToPeronsPage.bind(this);
  }

  updatePersonState(event){
    const field = event.target.name;
    const value = event.target.value;
    let person = Object.assign({}, this.state.person);
    person[field] = value;
    return this.setState({person: person});
  }

  redirectToPeronsPage() {
    this.setState({saving: false});
    toastr.success('Person Saved.');
    browserHistory.push("/persons");
  }

  onSave(){
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.savePerson(this.state.person)
      .then(() => this.redirectToPeronsPage())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <PersonForm
        allPersons={this.props.persons}
        onChange={this.updatePersonState}
        onSave={this.onSave}
        person={this.state.person}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }

}

function mapStateToProps(state, ownProps) {
  let person = {id: '', firstName: '', lastName: ''};

  return {
    person: person
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
