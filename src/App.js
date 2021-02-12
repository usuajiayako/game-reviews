import './App.css';
import Title from "./Title";
import NavBar from "./NavBar";
import ReviewsList from "./ReviewsList";
import  { Router } from "@reach/router";
import SingleReview from "./SingleReview";
import React, { Component } from 'react';

class App extends Component {

  state = {
    username: "jessjelly"
  }

  logout = () => {
    this.setState({username: ""})
  }

  render() {
    return (
      <div className="App">
        <Title user={this.state} logout={this.logout}/>
        <NavBar/>
        <Router className="reviewsList">
        <ReviewsList path="/"/>
        <ReviewsList path="/reviews"/>
        <ReviewsList path="/reviews/:category"/>
        <SingleReview path="/reviews/single_review/:review_id" user={this.state}/>
        </Router>
      </div>
    );
  }
}

export default App;
