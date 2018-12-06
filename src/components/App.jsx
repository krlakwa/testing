import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton = () => {
    const { auth } = this.props;
    return (
      auth ?
      <button onClick={() => this.props.changeAuth(false)}>
        Sign Out
      </button> :
      <button onClick={() => this.props.changeAuth(true)}>
        Sign In
      </button>
    )
  }
  renderHeader = () => (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/post'>Post A Comment</Link></li>
      <li>{this.renderButton()}</li>
    </ul>
  )
  render() {
    return (
      <>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(App);
