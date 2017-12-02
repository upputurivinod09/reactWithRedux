import React, {PropTypes} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const CourseList = ({courses}) => {
  return (
    <Table>
      <TableHeader displaySelectAll = {false} enableSelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Course Name</TableHeaderColumn>
        <TableHeaderColumn>AuthorName</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {courses.map(course =>
          <TableRow key={course.name}>
            <TableRowColumn>{course.name}</TableRowColumn>
            <TableRowColumn>{course.authorName}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
