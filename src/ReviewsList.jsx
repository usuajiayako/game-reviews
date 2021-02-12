import React, { Component } from 'react';
import SortButton from "./SortButton";
import * as api from "./api";
import { Link } from "@reach/router";
import "./App.css";

class ReviewsList extends Component {
  state = { 
    reviews: [],
    category: "",
    sort_by: "",
    order: "desc",
    owner: "",
   }

   componentDidMount = () => {
    api.getReviews(this.props.category)
    .then(({ reviews }) => this.setState({ reviews }))
  }

   componentDidUpdate = (prevProps, prevState) => {  
     if (this.props.category !== prevProps.category 
      || this.state.sort_by !== prevState.sort_by 
      || this.state.order !== prevState.order
      || this.state.owner !== prevState.owner)
     api.getReviews(this.props.category, this.state.sort_by, this.state.order, this.state.owner)
     .then(({ reviews }) => this.setState({ reviews }))
  }

  sort_by = (sort_by) => {
    this.setState({ sort_by })
  }

  order = () => {
    if (this.state.order === "desc") this.setState({order: "asc" })
    if (this.state.order === "asc") this.setState({order: "desc" })
  }

  owner = (owner) => {
    this.setState({owner})
  }

  render() { 
    console.log(this.state)
    return ( 
      <>
      <SortButton sort_by={this.sort_by} order={this.order}/>
       { this.state.reviews.map((review) => 
         <li key={review.review_id} 
         className="review">
           <Link to="/">Go Back to the Whole List</Link>
           <Link to={`/reviews/single_review/${review.review_id}`}>
           <p>Category: {review.category}</p>
           <p>{"Title : " + review.title}</p>
           <p>{review.review_body}</p>
           </Link>
           <p>{review.comment_count} comments</p>
           <p>Poseted by : <button onClick={() => {this.owner(review.owner)}}>{review.owner}</button></p>
           <p>Date : {review.created_at.slice(0, 10)}</p>
           </li>
      )}
     </>
       );
     }
}
 
export default ReviewsList;