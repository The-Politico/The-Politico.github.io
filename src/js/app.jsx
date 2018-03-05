import './../../node_modules/normalize.css/normalize.css';
import './../scss/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import Home from './pages/home';
import Jobs from './pages/jobs';
import About from './pages/about';
import OpenSource from './pages/source';

const App = () => (
  <Router>
   <div>
     <Route exact path="/" component={Home}/>
     <Route exact path="/jobs" component={Jobs}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/open-source" component={OpenSource}/>
   </div>
  </Router>
)

render(<App />, document.getElementById('app'));
