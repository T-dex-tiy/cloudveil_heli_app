import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom' ;
import './index.css';
import logIn from './routes/logIn'
import App from './App';
import NavBar from './navComponents';
import registerServiceWorker from './registerServiceWorker';


function Page(props){

}
const Root = ()=>{
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={logIn}/>
          <Route path='/App' component={App}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root/>
  , document.getElementById('root'));
registerServiceWorker();
