import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';
import{ withRouter } from 'react-router-dom'


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
  }



renderLogin(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then(snapshot=>{
    let logInSucess="Logging in...";
    const userName="Welcome back";
    console.log("Yer in")

    localStorage.setItem('email', snapshot.email);
    localStorage.setItem('uid', snapshot.uid);
  })

          .catch(error=>{
            let failStatus="Email/Password is incorrect. Please try again";
            console.log(error.code,"Not today buddy")
            }
          )
}



  render(){
    return(
      <div className="loginPage">
        <div className="loginFields"><input className="inputfield" type="text" ref="email" placeholder="Email"/>
        <input className="inputfield" type="password" ref="pass" placeholder="Password"/></div>
        <div><button onClick={()=>this.renderLogin('email', 'pass')}>Click to Enter</button></div>
        </div>
    )
  }
}
 export default withRouter(logIn);
