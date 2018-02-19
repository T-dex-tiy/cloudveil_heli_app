import React, { Component } from 'react';
import Rebase from 're-base';
import firebase, {auth} from './firebase/firebase'
import LogIn from './routes/logIn'
import './styles/app.css';
import{EventEmitter} from 'events';
import Calendar from './calendar/datePicker';
import Header from './header';
import Pics from './customerPics/pictures';
import NavBar from './navComponents';
import { withRouter } from 'react-router-dom'


const base=Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    production: {},
    page:null,
    user:false,
    uid:'',
  };
  this.logOut = this.logOut.bind(this);
}



componentDidMount() {
  if(this.state.user!="testgroup1@cloudveil.com"){base.syncState(`production`, {
    context: this,
    state: 'production'
  });}
  else{
  base.syncState(`staging`, {
    context: this,
    state: 'production'
  });}
  const email=localStorage.getItem('email');
  const uid=localStorage.getItem('uid');
  this.setState({user:email})
  this.setState({uid:uid})

}

componentWillUnmount() {
  base.removeBinding(this.ref);
}

componentWillMount(){
  this.eventEmitter = new EventEmitter();
   this.eventEmitter.addListener("landingPage",({page}) => {
      this.userScreen({newLandingPage: page})
    });
    this.setState({user:localStorage.email})
    this.setState({uid:localStorage.uid})
    const email = localStorage.getItem('email');
    const uid= localStorage.getItem('uid');
    console.log(this.state.user);
}


logOut(){
  console.log("signed out!");
  this.setState({user: null })
  this.setState({uid: null })
  firebase.auth().signOut();
  localStorage.removeItem('email');
  localStorage.removeItem('uid');
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
}
userScreen({newLandingPage}){
  this.setState({page: newLandingPage})
  this.setState({user:localStorage.email})
  this.setState({uid:localStorage.uid})
  console.log(newLandingPage);
  console.log(localStorage.email);
}


  render() {
    var userPage
    if(this.state.page===1){
      userPage= <Calendar/>
      console.log("Calendar page")
    }
    if(this.state.page===2){
      userPage= <Pics dates={Object.keys(this.state.production.days).map(key=>{return key})}
                picture={this.state.production.images} videos={this.state.production.videos}/>
      console.log("Pics page")}

    return (
      <div className="App">
        <div>
          <Header user={this.state.user} />
          <div className="userButton">
            <button className="userLogIn" onClick={this.logOut}>Log Out</button>
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

export default withRouter(App);
