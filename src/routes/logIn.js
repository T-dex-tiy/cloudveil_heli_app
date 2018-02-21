import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';
import{ withRouter } from 'react-router-dom'


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
    this.logInfo=this.logInfo.bind(this)
  }

logInfo(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  const userdata= {email, pass}
  this.props.renderLogin(userdata)
  console.log(this.props.user, this.props.uid);
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



  render(){
  if(this.props.user=== null){
      return(
      <div className="loginPage">
        <div className="loginFields"><input className="inputfield" type="text" ref="email" placeholder="Email"/>
        <input className="inputfield" type="password" ref="pass" placeholder="Password"/></div>
        <div><button onClick={()=>this.logInfo('email', 'pass')}>Click to Enter</button></div>
        </div>
    );
  }
  else{
    return(
      <div>
      Welcome back {this.props.user}
      </div>
    )
  }
  }
}
 export default withRouter(logIn);
