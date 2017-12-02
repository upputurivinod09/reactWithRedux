import React,{PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class CoursePage extends React.Component {

  redirectToAddCoursePage() {
    browserHistory.push("/addCourse");
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <RaisedButton label="Add Course" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
