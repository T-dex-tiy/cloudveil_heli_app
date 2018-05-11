import React, { Component } from "react";
import Rebase from "re-base";
import firebase, { auth } from "./firebase/firebase";
import LogIn from "./routes/logIn";
import "./styles/app.css";
import { EventEmitter } from "events";
import ResPage from "./calendar/datePicker";
import Header from "./header";
import Pics from "./customerPics/pictures";
import NavBar from "./navComponents";
import Weather from "./weather.js/weather";
import { withRouter } from "react-router-dom";

const base = Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      production: {},
      page: null,
      user: false,
      uid: "",
      remainingdays: ""
    };
    this.logOut = this.logOut.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  componentDidMount() {
    if (this.state.user != "testgroup1@cloudveil.com") {
      base.syncState(`staging`, {
        context: this,
        state: "production"
      });
    } else {
      base.syncState(`production`, {
        context: this,
        state: "production"
      });
    }
    const email = localStorage.getItem("email");
    const uid = localStorage.getItem("uid");
    this.setState({ user: email });
    this.setState({ uid: uid });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
    this.eventEmitter.addListener("landingPage", ({ page }) => {
      this.userScreen({ newLandingPage: page });
    });
  }

  renderLogin(logInfo) {
    const email = logInfo.email;
    const pass = logInfo.pass;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(snapshot => {
        let logInSucess = "Logging in...";
        const userName = "Welcome back";
        console.log("Yer in");
        this.setState({ user: snapshot.email });
        this.setState({ uid: snapshot.uid });
        localStorage.setItem("email", snapshot.email);
        localStorage.setItem("uid", snapshot.uid);
      })

      .catch(error => {
        let failStatus = "Email/Password is incorrect. Please try again";
        console.log(error.code, "Not today buddy");
      });
  }

  logOut(pageLogout) {
    this.setState({ user: null });
    this.setState({ uid: null });
    firebase.auth().signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("uid");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
  }
  userScreen({ newLandingPage }) {
    this.setState({ page: newLandingPage });
    this.setState({ user: localStorage.email });
    this.setState({ uid: localStorage.uid });
  }

  newReservation(Res) {
    console.log(Res);
    let res = Object.keys(this.state.production.days).map(
      key => this.state.production.days[key]
    );
    let resMapOne = Object.keys(res).map(key => {
      let date = res[key].date;
      let flyTime = res[key].reservationOne.timeSlot;
      let mappedRes = date + " " + flyTime;
      return mappedRes;
    });
    let resMapTwo = Object.keys(res)
      .filter(key => {
        let date = res[key].date;
        let keys = res[key].reservationTwo;
        return keys;
      })
      .map(keys => res[keys]);
    let newResMapTwo = res.map(key => res[key]);
    console.log(resMapTwo);
    console.log(newResMapTwo);
    // let openRes1 = Object.keys(res).filter(key => {
    //   if (Res.timeSlot[key] != res[key].reservationTwo) {
    //     return res[key].reservationTwo;
    //   } else {
    //     alert("does this actually work?");
    //   }
    // });

    // let openRes2 = Object.keys(res).filter(key => {
    //   let newRes = [];
    //   newRes[key] = res[key];
    //   return newRes[key].reservationTwo[key].timeSlot;
    // });
    console.log(resMapOne.includes(Res.day + " " + Res.timeSlot));
    if (resMapOne.includes(Res.day + " " + Res.timeSlot)) {
      alert("All booked up! Please Select a different day!");
    } else {
      alert(
        "You are booked for " +
          Res.operatingArea +
          " skiing lodge on " +
          Res.day
      );
      alert(
        "You will be flying out of " +
          Res.pickupLocation +
          ". Your pick up time is in the " +
          Res.timeSlot
      );
    }

    // console.log(res);
    console.log(resMapOne);
    // console.log(resMapTwo);
  }

  render() {
    var userPage;
    if (this.state.user == null) {
      userPage = (
        <div>
          <h1> Please Log in!</h1>
        </div>
      );
    } else if (this.state.page === 1 && this.state.user !== null) {
      userPage = (
        <ResPage
          users={Object.keys(this.state.production.users).map(key => {
            if (this.state.uid === this.state.production.users[key].uid) {
              return this.state.production.users[key];
            }
          })}
          reservations={this.state.production.reservations}
          days={this.state.production.days}
          newReservation={this.newReservation.bind(this)}
        />
      );
      console.log("Calendar page");
    } else if (this.state.page === 2 && this.state.user !== null) {
      userPage = (
        <Pics
          dates={Object.keys(this.state.production.days).map(key => {
            return key;
          })}
          picture={this.state.production.images}
          videos={this.state.production.videos}
        />
      );
      console.log("Pics page");
    }

    return (
      <div className="App">
        <div>
          <Header
            user={this.state.user}
            uid={this.state.uid}
            renderLogin={this.renderLogin.bind(this)}
            logOut={this.logOut.bind(this)}
          />
          <NavBar
            eventEmitter={this.eventEmitter}
            landingPage={this.state.page}
          />
        </div>
        <div className="mainArea">{userPage}</div>
        <Weather />
      </div>
    );
  }
}

export default withRouter(App);
