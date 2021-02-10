import React, { Component } from 'react';
import * as api from "./api";
import "./App.css";

class Comments extends Component {
  state = { 
    comments:[],
   }

   componentDidMount = () => {
     console.log(this.props.review_id)
    api.getComments(this.props.review_id)
    .then(({ comments }) => 
      this.setState({ comments }))
   }

  render() { 
    console.log("in render...")
    const { comments } = this.state;
    console.log(comments, "rendering")
    return (
      <>
       { comments.map((comment) => 
       <li key={comment.comment_id} className="comment">
        <p>Author: {comment.author}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>{comment.body}</p>
        <button>Like: {comment.votes}</button>
        <p>Posted at: {comment.created_at}</p>
      </li>
      )}
     </>
     );
  }
}
 
export default Comments;