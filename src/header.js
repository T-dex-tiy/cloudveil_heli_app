import React, { Component } from 'react';
import mainLogo from './styles/logos/mainlogo2.png';

import LogIn from './routes/logIn';
import './styles/app.css';

class Header extends Component {
  render() {
    return (
      <div className="header font">
        <LogIn
          className="userName"
          user={this.props.user}
          uid={this.props.uid}
          renderLogin={this.props.renderLogin.bind(this)}
          logOut={this.props.logOut.bind(this)}
        />
        <div className="header_title">
          <h1 className="title font">Cloudveil Heli</h1>
          <img className="mainLogo" src={mainLogo} />
        </div>
      </div>
    );
  }
}
export default Header;
