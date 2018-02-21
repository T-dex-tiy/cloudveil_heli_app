import React, { Component } from 'react';
import mainLogo from './styles/logos/mainlogo2.png';
import firebase, {auth} from './firebase/firebase.js';
import LogIn from './routes/logIn'
import './styles/app.css';


class Header extends Component{
  constructor(props){
    super(props)


  }

  render(){
    return(
      <div className="header">
      <LogIn user={this.props.user}
       uid={this.props.uid}
       renderLogin={this.props.renderLogin.bind(this)}
       logOut={this.props.logOut.bind(this)}/>
          <div className="header_title">
          <h1 className="title">Cloudveil Heli</h1>
          <img className="mainLogo" src={mainLogo}/>
          </div>
      </div>
    )
  }
}
 export default Header;
