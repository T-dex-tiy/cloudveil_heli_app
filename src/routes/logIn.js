import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
    this.state={
      uid:null,
      owner:null
    }
  }

componentWillMount(){

}

renderLogin(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  const promise=auth.signInWithEmailAndPassword(email, pass);
  promise.catch(console.log(auth.message))
  // console.log("promise",promise)
  console.log("auth displayName",promise.currentUser);
  // auth().onAuthStateChanged(firebaseUser=>{
  //   if(firbaseUser){
  //     console.log(firebaseUser)
  //   }
  //   else{
  //     console.log("not logged in");
  //   }
  // })
}

  render(){
    return(
      <div className="loginPage">
        <h1>BlueBird Heli</h1>
        <h2>Log In</h2>
        <div className="loginFields"><input className="Email" type="text" ref="email"/>Email
        <input className="password" type="password" ref="pass"/>Password</div>
        <div><button onClick={()=>this.renderLogin('email', 'pass')}>Click to Enter</button></div>
        </div>
    )
  }
}
 export default logIn;
