import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom' ;
import './index.css';
import logIn from './routes/logIn'
import App from './App';
import NavBar from './navComponents';
import registerServiceWorker from './registerServiceWorker';
import firebase, {auth} from './firebase/firebase.js'



class Root extends Component{
  constructor(props){
    super(props)
      this.state={
        user:null,
        uid:"checking"
      }
  }



render(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={logIn}/>
          <Route path='/login' component={logIn}/>
          <Route path='/App' component={App}/>
        </Switch>
      </div>
    </Router>
  )
}
}

ReactDOM.render(<Root/>
  , document.getElementById('root'));
registerServiceWorker();
