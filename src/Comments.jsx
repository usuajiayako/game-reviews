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
    .catch(err => console.log(err))
   }

   componentDidUpdate = (prevProps, prevState) => {
     if(this.state.deleteMessage !== prevState.deleteMessage)
     api.getComments(this.props.review_id)
     .then(({ comments }) => 
       this.setState({ comments, deleteMessage: ""}))
   }

   commentSubmit = (event) => {
    event.preventDefault();
     api.postComment(this.props.review_id, this.state.newComment, this.props.user.username)
     .then((res) => this.setState({comments: [res.comment, ...this.state.comments], newComment: ""}))
    
   }
  
   deleteComment = (comment_id) => {
    api.deleteComment(comment_id);
    this.setState({deleteMessage: "Comment deleted."})
   }

   handleChange = (event) => {
    this.setState({newComment: event.target.value})
   }

  render() { 
    const { comments } = this.state;
    console.log(this.state.newComment)
    return !this.state.comments.length ? 
    <p>Sorry, No Comments Found</p> : (
      <>
        <form onSubmit={this.commentSubmit}>
          <label> Leave your comment: 
          <input type="text" onChange={this.handleChange} value={this.state.newComment}/>
          </label>
          <button type="submit" className="button" disabled={this.state.newComment ? false : true}>Submit</button>
          </form>
       { comments.map((comment) => 
       <li key={comment.comment_id} className="comment">
        <p>Author: {comment.author}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>{comment.body}</p>
        <UpdateVotes votes={comment.votes} id={comment.comment_id} from="comments"/>
        <p>Posted at: {comment.created_at.slice(0, 10)}</p>
        <button onClick={() => this.deleteComment(comment.comment_id)} disabled={
          comment.author !== this.props.user.username}className="button">Delete</button>
      </li>
      )}
     </>
     );
  }
}
 
export default Comments;