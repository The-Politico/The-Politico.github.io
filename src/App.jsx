import 'Theme/styles.scss';

import React from 'react';
import { render, hydrate } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from 'Components/home';
import Jobs from 'Components/jobs';
import About from 'Components/about';
import OpenSource from 'Components/openSource';
import FourOhFour from 'Components/FourOhFour';
import Blog from 'Components/blog';
import Post from 'Components/blog/post';

const App = () => (
  <Router >
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/jobs/' component={Jobs} />
      <Route path='/team/' component={About} />
      <Route path='/code/' component={OpenSource} />
      <Route path='/blog/:date/:id/' component={Post} />
      <Route path='/blog/' component={Blog} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
