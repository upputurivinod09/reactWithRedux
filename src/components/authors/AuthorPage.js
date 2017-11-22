import React,{PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {
        firstName: "Vinod",
        lastName: "Upputuri"
      }
    };

    console.log("initializing state"+this.state.author.firstName);
  }

  render () {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        {/*<AuthorList authors={this.state.authors} />*/}
      </div>
    );
  }
}

export default AuthorPage;
