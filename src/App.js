import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/app.css';
import{EventEmitter} from 'events';
import Calendar from './calendar/datePicker';
import Header from './header';
import Pics from './customerPics/pictures';
import NavBar from './navComponents';

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
    staging: {},
    page:null,
    user:null,
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

componentWillMount(){
  this.eventEmitter = new EventEmitter();
   this.eventEmitter.addListener("landingPage",({page}) => {
      this.userScreen({newLandingPage: page})
    });
}
userScreen({newLandingPage}){
  this.setState({page: newLandingPage})
  console.log(newLandingPage);
}
  render() {
    var userPage
    if(this.state.page===1){
      userPage= <Calendar/>
      console.log("Calendar page")
    }
    if(this.state.page===2){
      userPage= <Pics/>
      console.log("Pics page")
    }
    return (
      <div className="App">
        <div>
          <Header/>
          <NavBar eventEmitter={this.eventEmitter}
          landingPage={this.state.page}/>
        </div>
        <div className="mainArea">
        {userPage}
        </div>
      </div>
    );
  }
}

export default App;
