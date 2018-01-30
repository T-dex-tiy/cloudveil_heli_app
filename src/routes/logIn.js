import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
    this.state={
      uid:null,
      onwer:null
    }
  }

renderLogin(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  auth.signInWithEmailAndPassword(email, pass)
}

  render(){
    var email=this.refs.email;
    var pass=this.refs.pass;
    return(
      <div className="loginPage">
        <h1>BlueBird Heli</h1>
        <h2>Log In</h2>
        <div className="loginFields"><input className="Email" type="text" ref="email"/>Email
        <input className="password" type="password" ref="pass"/>Password</div>
        <div><button onClick={()=>this.renderLogin('email', 'pass')}>Enter</button></div>
        </div>
    )
  }
}
 export default logIn;
