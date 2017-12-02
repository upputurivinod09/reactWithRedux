import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class CourseForm extends React.Component {
  render() {
    return (
      <form>
        <TextInput
          name="name"
          label="Course Name"
          value={this.props.course.name}
          onChange={this.props.onChange} />

        <TextInput
          name="authorName"
          label="Author Name"
          value={this.props.course.authorName}
          onChange={this.props.onChange} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
      </form>
    );
  }
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default CourseForm;
