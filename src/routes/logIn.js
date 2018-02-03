import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
    this.state={
      logInStatus:""
    }
  }

componentWillMount(){

}

renderLogin(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then(snapshot=>{if(snapshot.emailVerified===true){
    console.log("Yer in")
    let logInSucess="Logging in...";
    this.setState({ logInStatus:logInSucess })
    console.log("Yer in")
  }
})
          .catch(error=>{
            let failStatus="Email/Password is incorrect. Please try again";
            console.log(error.code,"Not today buddy")
            this.setState({ logInStatus:failStatus })
            }
          )
}





  render(){

    return(
      <div className="loginPage">
        <h1>BlueBird Heli</h1>
        <h2>Log In</h2>
        <div className="loginFields"><input className="Email" type="text" ref="email"/>Email
        <input className="password" type="password" ref="pass"/>Password</div>
        <div><button onClick={()=>this.renderLogin('email', 'pass')}>Click to Enter</button></div>
        <div>Log in status </div><div>{this.state.logInStatus}</div>
        </div>
    )
  }
}
 export default logIn;
