import React, { Component } from "react";
import * as api from "./api";

class NavBar extends Component {
  state = { 
    categories: [],
   }

  componentDidMount = () => {
    console.log("in navbar CDM")
    api.getCategories().then((categories) => this.setState({ categories }))
  }
  render() { 
    return ( 
      <nav className="navbar">Nav bar here</nav>
     );
  }
}
 
export default NavBar;