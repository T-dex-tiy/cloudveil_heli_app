import React, { Component } from 'react';
import mainLogo from './styles/logos/mainlogo2.png';
import './styles/app.css';


class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="header">
          <div className="header_title"/>
          <h1 className="title">Cloudveil Heli</h1>
          <img className="mainLogo" src={mainLogo}/>
          <div className="userButton">
            <button className="userLogIn">Log Out</button>
          </div>
      </div>
    )
  }
}
 export default Header;
