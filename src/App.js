import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/app.css';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
