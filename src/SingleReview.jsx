import React, { Component } from 'react';
import * as api from "./api";
import { Link } from "@reach/router";
import Comments from "./Comments";

class SingleReview extends Component {
  state = { 
    review: {}
  }
  
  componentDidMount = () => {
    api.getReviewById(this.props.review_id)
    .then(( { review }) => 
    this.setState({ review }))
  }

  render() { 
    const  review  = this.state.review
    return ( 
      <>
      <section className="singleReview">
        <Link to="/">Go Back to the List</Link>
        <p>Category: {review.category} </p>
        <p>Designer : {review.designer}</p>
        <p>Title : {review.title}</p>
        <p>Review : {review.review_body}</p>
        <p>Votes : {review.votes}</p>
        <p>Comments : {review.comment_count}</p>
        <p>Image : <img src={review.review_img_url}/></p>
      </section>
        <Comments review_id={this.props.review_id}/>
      </>
    );
  }
}
 
export default SingleReview;