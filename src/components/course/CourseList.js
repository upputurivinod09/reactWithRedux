import React, {PropTypes} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import CourseListRow from "./CourseListRow";

const CourseList = ({courses}) => {
  return (
    <Table>
      <TableHeader displaySelectAll = {false} enableSelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>watch Reference</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Author</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Length</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {courses.map(course =>
          <CourseListRow course={course} key={course.id}/>
        )}
      </TableBody>
    </Table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
