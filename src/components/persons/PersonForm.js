import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class PersonForm extends React.Component {
  render() {
    return (
      <form>
        <TextInput
          name="firstName"
          label="First Name"
          value={this.props.person.firstName}
          onChange={this.props.onChange} />

        <TextInput
          name="lastName"
          label="Last Name"
          value={this.props.person.lastName}
          onChange={this.props.onChange} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
      </form>
    );
  }
}

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default PersonForm;
