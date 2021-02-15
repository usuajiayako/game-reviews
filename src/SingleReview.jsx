import React, { Component } from 'react';
import * as api from "./api";
import { Link } from "@reach/router";
import Comments from "./Comments";
import "./App.css";
import UpdateVotes from "./UpdateVotes";

class SingleReview extends Component {
  state = { 
    review: []
  }
  
  componentDidMount = () => {
    api.getReviewById(this.props.review_id)
    .then(({ review }) => 
    this.setState({ review }))
    .catch(err => console.dir(err))
  }

  render() { 
    const review = this.state.review;

    return !this.state.review ? 
    <>
    <Link to="/"><button className="button">Go Back to the Whole List</button></Link>
    <p>Sorry, No Review Found</p>
    </>
    : ( 
      <>
      <section className="singleReview">
        <Link to="/"><button className="button">Go Back to the Whole List</button></Link>
        <p>Category: {review.category} </p>
        <p>Designer : {review.designer}</p>
        <p>Title : {review.title}</p>
        <p>Review : {review.review_body}</p>
        <UpdateVotes votes={review.votes} id={review.review_id} from="singleReview"/>
        <p>{review.comment_count} comments</p>
        <p><img src={review.review_img_url} className="img"/></p>
      </section>
        <h2>Comments</h2>
        <Comments review_id={this.props.review_id} user={this.props.user}/>
      </>
    );
  }
}
 
export default SingleReview;