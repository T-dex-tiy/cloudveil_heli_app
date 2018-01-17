import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/app.css';
import mainLogo from './styles/logos/mainlogo2.png';
import CalendarButton from './calendar/calendarButton';
import PicturePicker from './customerPics/pictureButton';

  const app = firebase.initializeApp({
    apiKey: "AIzaSyAM0DL6QzhVONFmxP5OHWGi9Vj4lS2RbbM",
    authDomain: "bluebirdheli-dd1f5.firebaseapp.com",
    databaseURL: "https://bluebirdheli-dd1f5.firebaseio.com",
    storageBucket: "bluebirdheli-dd1f5.appspot.com",
  });

const base=Rebase.createClass(app.database());



class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    staging: {}
  };
}

componentDidMount() {
  base.syncState(`staging`, {
    context: this,
    state: 'staging'
  });
}

componentWillUnmount() {
  base.removeBinding(this.ref);
}
  render() {
    return (
      <div className="App">
        <div>
          <header className="header">
            <div className="header_title">
            <div><h1 className="title">Cloudveil Heli</h1></div>
            <div><img className="mainLogo" src={mainLogo}/></div>
          </div>
          <div className="userButton">
            <button className="userLogIn">Log In</button>
          </div>
          </header>
        </div>
        <div className="mainArea">
        <CalendarButton/>
        <PicturePicker/>
        </div>
      </div>
    );
  }
}

export default App;
