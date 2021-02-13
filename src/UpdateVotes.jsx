import React, { Component } from 'react';
import * as api from "./api";


class UpdateVotes extends Component {
  state = { 
    votes: 0,
   }
  
  handleClick = (num) => {
      this.setState((currentState) => ({votes: currentState.votes + num}))
      api.updateVotes(num, this.props.id, this.props.from)
  }
  render() { 
    return ( 
      <div className="vote_button">
        <button disabled={this.state.votes === 1} onClick={()=>{this.handleClick(1)} }className="button">❤️</button>
        <p>Votes: {this.props.votes + this.state.votes}</p>
        <button disabled={this.state.votes === -1} onClick={()=>{this.handleClick(-1)} }className="button">💙</button>
      </div>
     );
  }
}
 
export default UpdateVotes;