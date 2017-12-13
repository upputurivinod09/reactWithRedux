import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { browserHistory } from 'react-router';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, this.props.course),
          errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.onSave = this.onSave.bind(this);
        this.redirectToCoursesPage = this.redirectToCoursesPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.course.id != nextProps.course.id) {
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }

    redirectToCoursesPage() {
      browserHistory.push("/courses");
    }

    updateCourseState(event) {
      const field = event.target.name;
      let course = Object.assign({}, this.state.course);
      course[field] = event.target.value;
      return this.setState({course: course});
    }

    onSave(event) {
      event.preventDefault();
      this.props.actions.saveCourse(this.state.course);
      this.redirectToCoursesPage();
    }

    render() {
        return (
          <CourseForm
            allAuthors={this.props.authors}
            onChange={this.updateCourseState}
            onSave={this.onSave}
            course={this.state.course}
            errors={this.state.errors}
          />
        );
    }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length) return course[0]; // since filter return array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path '/course/:id'

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
