import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom' ;
import './index.css';
import logIn from './routes/logIn'
import App from './App';

import NavBar from './navComponents';
import registerServiceWorker from './registerServiceWorker';

const Root = ()=>{
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={logIn}/>
          <Route exact path='/App' component={App}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root/>
  , document.getElementById('root'));
registerServiceWorker();
