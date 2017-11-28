import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class AuthorForm extends React.Component {
  render() {
    return (
      <form>
        {/*<h1>Manage Author </h1>*/}
        <TextInput
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange} />

        <TextInput
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
      </form>
    );
  }
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
