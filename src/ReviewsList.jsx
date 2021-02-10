import React, { Component } from 'react';
import SortButton from "./SortButton";
import * as api from "./api";
import { Link } from "@reach/router";

class ReviewsList extends Component {
  state = { 
    reviews: [],
   }

   componentDidMount = () => {
    api.getReviews().then(({ reviews }) => {
      this.setState({ reviews })
    })
   }

   componentDidUpdate = (prevProps) => {
     if (this.props.category !== prevProps.category)
    api.getReviews(this.props.category).then(({ reviews }) => {
      this.setState({ reviews })
    })
  }

  render() { 
    return ( 
      <>
      <SortButton />
       { this.state.reviews.map((review) => 
         <li key={review.review_id} 
         className="review">
           <Link to={`/reviews/single_review/${review.review_id}`}>
           <p>{"Title : " + review.title}</p>
           <p>{review.review_body}</p>
           </Link>
           </li>
      )}
     </>
       );
     }
}
 
export default ReviewsList;