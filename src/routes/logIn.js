import React, { Component } from 'react';
import firebase, {auth} from '../firebase/firebase.js';
import{ withRouter } from 'react-router-dom'


// auth.signInWithPassword(email,pass)


class logIn extends Component{
  constructor(props){
    super(props)
    this.state={
      logInStatus:"",
      loginName:"",
    }
  }



renderLogin(){
  const pass= this.refs.pass.value;
  const email= this.refs.email.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then(snapshot=>{
    let logInSucess="Logging in...";
    this.setState({ logInStatus:logInSucess })
    this.setState({ userlogin: true})
    const userName="Welcome back";
    this.setState({loginName:userName})
    console.log("Yer in")
    this.props.history.push("/app");
    localStorage.setItem('email', snapshot.email);
    localStorage.setItem('uid', snapshot.uid);
  })

          .catch(error=>{
            let failStatus="Email/Password is incorrect. Please try again";
            console.log(error.code,"Not today buddy")
            this.setState({ loginName:failStatus })
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
        <div>Log in status </div><div>{this.state.loginName}</div>
        </div>
    )
  }
}
 export default withRouter(logIn);
