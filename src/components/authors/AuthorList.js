import React, {PropTypes} from 'react';


const AuthorList = ({authors}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
      </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <tr key={author.firstName}>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;

