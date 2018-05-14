import React, { Component } from "react";
import mainLogo from "./styles/logos/mainlogo2.png";
import LogIn from "./routes/logIn";
import "./styles/app.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const madeReservations = Object.keys(this.props.reservations).map(
      key => this.props.reservations[key]
    );

    const updatedReservations = Object.keys(madeReservations).map(key => {
      if (madeReservations[key].reservationOne.groupUID === this.props.uid) {
        console.log(madeReservations[key]);
        return madeReservations[key].reservationOne;
      }
    });
    console.log(madeReservations, updatedReservations);
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
