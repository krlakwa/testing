import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/index";
class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h4>Add comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button type="submit">Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
