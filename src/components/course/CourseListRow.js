import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const CourseListRow = ({course}) => {
    return (
      <TableRow>
        <TableRowColumn><a href={course.watchHref} target="_blank">Watch</a></TableRowColumn>
        <TableRowColumn><Link to={'/course/' + course.id}>{course.title}</Link></TableRowColumn>
        <TableRowColumn>{course.authorId}</TableRowColumn>
        <TableRowColumn>{course.category}</TableRowColumn>
        <TableRowColumn>{course.length}</TableRowColumn>
      </TableRow>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
