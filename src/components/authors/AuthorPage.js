import React,{PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import AuthorList from './AuthorList';
import * as authorActions from '../../actions/authorActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {
        firstName: ""
      }
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  authorRow(author, index) {
    return <div key={index}>{author.firstName}</div>;
  }

  onNameChange(event) {
    const author = this.state.author;
    author.firstName = event.target.value;
    this.setState({author: author});
  }

  onClickSave() {
    console.log("author: "+this.state.author.firstName)
    this.props.actions.createAuthor(this.state.author);
  }

  render () {
    return (
      <div>
        <h1>Authors</h1>
        {this.props.authors.map(this.authorRow)}
        <h2>Add Author</h2>
        <input type="text" onChange={this.onNameChange}
               value={this.state.author.firstName} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
        {/*<Link to="addAuthor" className="btn btn-default">Add Author</Link>*/}
        {/*<AuthorList authors={this.state.authors} />*/}
        {/*<AuthorList authors={this.state.authors} />*/}
      </div>
    );
  }
}

AuthorPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
