import 'Theme/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from 'Components/home';
import Jobs from 'Components/jobs';
import About from 'Components/about';
import OpenSource from 'Components/openSource';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/jobs' component={Jobs} />
      <Route exact path='/about' component={About} />
      <Route exact path='/open-source' component={OpenSource} />
    </div>
  </Router>
);

render(<App />, document.getElementById('app'));
