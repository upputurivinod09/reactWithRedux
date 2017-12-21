import React,{PropTypes} from 'react';
import { Link, IndexLink , browserHistory } from 'react-router';
import AuthorList from './AuthorList';
import * as authorActions from '../../actions/authorActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthorPage extends React.Component {

  redirectToAddAuthorPage() {
    browserHistory.push("/addAuthor");
  }

  render () {
    return (
      <div>
        <h1>Authors</h1>
        <input type="submit" value="Add Author" className="btn btn-primary" onClick={this.redirectToAddAuthorPage}/>
        <AuthorList authors={this.props.authors}/>
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
