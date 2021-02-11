import React, { Component } from 'react';
import SortButton from "./SortButton";
import * as api from "./api";
import { Link } from "@reach/router";
import "./App.css";

class ReviewsList extends Component {
  state = { 
    reviews: [],
    category: "",
    sortby: "",
   }

   componentDidMount = () => {
    api.getReviews(this.props.category)
    .then(({ reviews }) => this.setState({ reviews }))}

   componentDidUpdate = (prevProps, prevState) => {  
    //  console.log("thisprop", this.props.category)
    //  console.log("prevprop", prevState.category)

     if (this.props.category !== prevProps.category 
      || this.state.sortby !== prevState.sortby)

     api.getReviews(this.props.category, this.state.sortby)
     .then(({ reviews }) => this.setState({ reviews }))
  
  }

  sortby = (sortby) => {
    console.log(sortby)
    this.setState({ sortby })
  }

  render() { 
    console.log(this.state)
    return ( 
      <>
      <SortButton sortby={this.sortby}/>
       { this.state.reviews.map((review) => 
         <li key={review.review_id} 
         className="review">
           <Link to={`/reviews/single_review/${review.review_id}`}>
           <p>{"Title : " + review.title}</p>
           <p>{review.review_body}</p>
           <p>{review.comment_count} comments</p>
           <p>Date : {review.created_at.slice(0, 10)}</p>
           </Link>
           </li>
      )}
     </>
       );
     }
}
 
export default ReviewsList;