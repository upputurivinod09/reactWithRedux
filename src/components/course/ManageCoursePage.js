import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
// import authorsFormattedForDropdown from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, this.props.course),
          errors: {}
        };

        this.saving = false;
        this.updateCourseState = this.updateCourseState.bind(this);
        this.onSave = this.onSave.bind(this);
        this.redirectToCoursesPage = this.redirectToCoursesPage.bind(this);
    }

    componentWillMount() {
      const courseId = this.props.params.id;
      this.props.actions.loadCourseById(courseId);
    }

    redirectToCoursesPage() {
      this.saving = true;
      toastr.success('Course Saved.');
      browserHistory.push("/courses");
    }

    updateCourseState(event) {
      const field = event.target.name;
      let course = Object.assign({}, this.state.course);
      course[field] = event.target.value;
      return this.setState({course: course});
    }

    courseFormIsValid() {
      let formIsValid = true;
      let errors = {};

      if(this.state.course.title.length < 5) {
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
    }

    onSave(event) {
      event.preventDefault();

      if(!this.courseFormIsValid()) {
        return;
      }

      this.saving = true;
      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirectToCoursesPage())
        .catch(error => {
          toastr.error(error);
          this.saving = false;
        });
    }

    render() {
        return (
          <CourseForm
            allAuthors={this.props.authors}
            onChange={this.updateCourseState}
            onSave={this.onSave}
            course={this.state.course}
            errors={this.state.errors}
            saving={this.saving}
          />
        );
    }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};



function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

function mapStateToProps(state, ownProps) {

  return {
    course: state.course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
