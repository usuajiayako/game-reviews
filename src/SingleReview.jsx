import React, { Component } from 'react';
import * as api from "./api";

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
    console.log(this.state.review)
    const  review  = this.state.review
    console.log(review.category)
    return (  
      <section>
        <p>Category: {review.category} </p>
        <p>Designer : {review.designer}</p>
        <p>Title : {review.title}</p>
        <p>Review : {review.review_body}</p>
        <p>Votes : {review.votes}</p>
        <p>Comments : {review.comment_count}</p>
        <p>Image : <img src={review.review_img_url}/></p>
      </section>
    );
  }
}
 
export default SingleReview;