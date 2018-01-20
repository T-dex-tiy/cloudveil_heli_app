import React, { Component } from 'react';


class NavBar extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="top-bar">
      <p className="navigation"   onClick={(event) => { this.props.eventEmitter.emit("landingPage", {page: 1}) }}>Calendar</p>
      <p className="navigation"  onClick={(event) => { this.props.eventEmitter.emit("landingPage", {page: 2}) }}>Pictures</p>
      </div>

    )
  }
}
 export default NavBar;
