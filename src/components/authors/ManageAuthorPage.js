import React, {PropTypes} from 'react';
import AuthorForm from "./AuthorForm";
import {connect} from 'react-redux';
import * as authorActions from '../../actions/authorActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {
        firstName: "",
        lastName: ""
      }
    };

    this.setAuthor = this.setAuthor.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  setAuthor(event) {
    debugger;
    const author = this.state.author;
    let field = event.target.name;
    author[field] = event.target.value;
    this.setState({author: author});
  }

  saveAuthor() {
    this.props.actions.createAuthor(this.state.author);
    toastr.success('Author Saved.');
    browserHistory.push('/authors');
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <h2>Add Author</h2>
        <AuthorForm author={this.state.author} onSave={this.saveAuthor} onChange={this.setAuthor}/>
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  actions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
