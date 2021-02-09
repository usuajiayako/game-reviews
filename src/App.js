import './App.css';
import Title from "./Title";
import NavBar from "./NavBar";
import ReviewsList from "./ReviewsList";
import  { Router } from "@reach/router";
import SingleReview from "./SingleReview";

function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
      <Router className="reviewsList">
      <ReviewsList path="/"/>
      <ReviewsList path="/reviews"/>
      <ReviewsList path="/reviews/:category"/>
      <SingleReview path="/reviews/single_review/:review_id"/>
      </Router>
    </div>
  );
}

export default App;
