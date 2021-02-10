import React, { Component } from 'react';
import * as api from "./api";
import "./App.css";
import UpdateVotes from "./UpdateVotes";

class Comments extends Component {
  state = { 
    comments:[],
   }

   componentDidMount = () => {
    api.getComments(this.props.review_id)
    .then(({ comments }) => 
      this.setState({ comments }))
   }

  render() { 
    const { comments } = this.state;
    return (
      <>
       { comments.map((comment) => 
       <li key={comment.comment_id} className="comment">
        <p>Author: {comment.author}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>{comment.body}</p>
        <UpdateVotes votes={comment.votes} id={comment.comment_id} from="comments"/>
        <p>Posted at: {comment.created_at}</p>
      </li>
      )}
     </>
     );
  }
}
 
export default Comments;