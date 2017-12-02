import React, {PropTypes} from 'react';
import CourseForm from "./CourseForm";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        name: "",
        authorName: ""
      }
    };

    this.setCourse = this.setCourse.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  setCourse(event) {
    const course = this.state.course;
    let field = event.target.name;
    let value = event.target.value;
    course[field] = value;
    this.setState({course: course});
  }

  saveCourse() {
    this.props.actions.createCourse(this.state.course);
    toastr.success('Course Saved.');
    browserHistory.push('/courses');
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <CourseForm course={this.state.course} onSave={this.saveCourse} onChange={this.setCourse}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
