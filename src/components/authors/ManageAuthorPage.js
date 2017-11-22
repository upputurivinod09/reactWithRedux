import React from 'react';
import AuthorForm from "./AuthorForm";
import {connect} from 'react-redux';
import * as authorActions from '../../actions/authorActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

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
    const author = this.state.author;
    let field = event.target.name;
    console.log('field: '+field);
    let value = event.target.value;
    console.log('value: '+value);
    author[field] = value;
    this.setState({author: author});
  }

  saveAuthor() {
    // alert('Saving ' +this.state.author.firstName+","+this.state.author.lastName);
    this.props.actions.createAuthor(this.state.author);
    alert('Saving ' +this.state.author.firstName+","+this.state.author.lastName);
    toastr.success('Author Saved.');
    // this.transitionTo('authors');
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
