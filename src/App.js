import './App.css';
import Title from "./Title";
import NavBar from "./NavBar";
import ReviewsList from "./ReviewsList";
import  { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
      <Router className="reviewsList">
      <ReviewsList path="/" />
      <ReviewsList path="/reviews"/>
      </Router>
    </div>
  );
}

export default App;
