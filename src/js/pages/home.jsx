import { h } from 'preact';
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Header = () => (
  <div className="page home">
    <div className="center-box">
      <b className="icon icon-politico"></b>
      <h1>
        Interactive News.
      </h1>
      <p>
        <Link to="/about">About</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/open-source">Open Source</Link>
      </p>
    </div>
  </div>
);

export default Header;
