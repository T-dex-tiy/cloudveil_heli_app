import React, { Component } from 'react';
import Rebase from 're-base';
import firebase, {provider, auth} from './firebase/firebase'
import './styles/app.css';
import{EventEmitter} from 'events';
import Calendar from './calendar/datePicker';
import Header from './header';
import Pics from './customerPics/pictures';
import NavBar from './navComponents';


const base=Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    staging: {},
    page:null,
    user:null,
    email:"dex.mills@dexmills.com",
    password:"Nofxnofx1*=",
  };
  this.login = this.login.bind(this);
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

handleChange(e){

}
login(){
  auth.signInWithPopup(provider)
  .then((result)=>{
    const user= result.user;
    console.log("auth",auth)
    this.setState({
      user
    });
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
          <Header user={this.state.user} login={this.login.bind(this)}/>
          <div className="userButton">
            {this.state.user ? <button className="userLogIn" onCLick={this.logOut}>Log Out</button> :<button className="userLogIn" onClick={this.login}>Log In</button>}
          </div>
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
