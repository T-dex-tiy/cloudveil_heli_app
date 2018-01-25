import React, { Component } from 'react';



class logIn extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="loginPage">
        <h1>BlueBird Heli</h1>
        <h2>Log In</h2>
        <div className="loginFields"><input className="Email" type="text"/>Email
        <input className="password" type="password"/>Password</div>
        <div><button>Enter</button></div>
        </div>
    )
  }
}
 export default logIn;
