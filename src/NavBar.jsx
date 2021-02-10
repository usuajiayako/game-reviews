import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = { 
    categories: [],
   }

  componentDidMount = () => {
    api.getCategories().then(( { categories } ) => 
    this.setState({ categories })
    )
  }
  
  render() { 
    return ( 
      <nav className="navbar">
        { this.state.categories.map((category) =>
          <Link to={`/reviews/${category.slug}`} key={category.slug}>{ category.slug }</Link>
        )}
      </nav>
     );
  }
}
 
export default NavBar;