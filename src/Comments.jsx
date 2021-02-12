import React, { Component } from 'react';
import * as api from "./api";
import "./App.css";
import UpdateVotes from "./UpdateVotes";

class Comments extends Component {
  state = { 
    comments:[],
    newComment: "",
    deleteMessage: "",
   }

   componentDidMount = () => {
    api.getComments(this.props.review_id)
    .then(({ comments }) => 
      this.setState({ comments }))
   }

   componentDidUpdate = (prevProps, prevState) => {
     
    if(this.state.newComment !== prevState.newComment)
     api.postComment(this.props.review_id, this.state.newComment, this.props.user.username)
     .then((res) => this.setState({comments: [res.comment, ...prevState.comments]}))
     
     if(this.state.deleteMessage !== prevState.deleteMessage)
     api.getComments(this.props.review_id)
     .then(({ comments }) => 
       this.setState({ comments, deleteMessage: ""}))
   }

   commentSubmit = (event) => {
    event.preventDefault();
    this.setState({newComment: event.target[0].form[0].value})
   }
  
   deleteComment = (comment_id) => {
    api.deleteComment(comment_id);
    this.setState({deleteMessage: "Comment deleted."})
   }

  render() { 
    const { comments } = this.state;
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.commentSubmit}>
          <label> Leave your comment: 
          <input type="text"/>
          </label>
          <button type="submit">Submit</button>
        </form>
       { comments.map((comment) => 
       <li key={comment.comment_id} className="comment">
        <p>Author: {comment.author}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>{comment.body}</p>
        <UpdateVotes votes={comment.votes} id={comment.comment_id} from="comments"/>
        <p>Posted at: {comment.created_at.slice(0, 10)}</p>
        <button onClick={() => this.deleteComment(comment.comment_id)} disabled={
          comment.author !== this.props.user.username}>Delete</button>
      </li>
      )}
     </>
     );
  }
}
 
export default Comments;