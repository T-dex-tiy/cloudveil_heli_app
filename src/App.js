import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/app.css';
import mainLogo from './styles/logos/mainlogo2.png';
import Calendar from './calendar/datePicker';
import Pics from './customerPics/pictures';

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
            <div><h1 className="title">Cloudveil Heli</h1></div>
            <div><img className="mainLogo" src={mainLogo}/></div>
          </header>
        </div>
        <div className="mainArea">
        <Calendar/>
        </div>
      </div>
    );
  }
}

export default App;
