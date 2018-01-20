import React, { Component } from 'react';


class NavBar extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="top-bar">
      <h1 className="navigation"   onClick={(event) => { this.props.eventEmitter.emit("landingPage", {page: 1}) }}>Calendar</h1>
      <h1 className="navigation"  onClick={(event) => { this.props.eventEmitter.emit("landingPage", {page: 2}) }}>Pictures</h1>
      </div>

    )
  }
}
 export default NavBar;
