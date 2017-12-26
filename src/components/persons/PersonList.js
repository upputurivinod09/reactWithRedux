import React, {PropTypes} from 'react';


const PersonList = ({persons}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
      </tr>
      </thead>
      <tbody>
        {persons.map(person =>
          <tr key={person.firstName}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired
};

export default PersonList;

