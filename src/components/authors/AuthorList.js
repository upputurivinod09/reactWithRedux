import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class AuthorList extends React.Component {

  // createAuthorRow(author, index) {
  //   return (
  //     <tr key={author.id}>
  //       <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
  //       <td>{author.firstName} {author.lastName}</td>
  //     </tr>
  //   );
  // }
  createAuthorRow(author, index) {
    return <div key={index}>{author.firstName}</div>;
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
          <th>ID</th>
          <th>Name</th>
          </thead>
          <tbody>
          console.log('authors'+this.props.authors);
          {this.props.authors.map(this.createAuthorRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;

