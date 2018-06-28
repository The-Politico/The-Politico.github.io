import React from 'react';
import Header from '../components/header.jsx';

import About from '../../content/jobs/about.md';
import Designer from '../../content/jobs/graphics-reporter.md';

const Jobs = () => (
  <div className='page jobs'>
    <Header />
    <article>
      <h2>Jobs</h2>
      <About />
      <div id="designer" className='card'>
        <Designer />
      </div>
      <div className='card'>
        <a
          className="button"
          href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=POLITICO%20Interactive%20News%20Jobs%20Graphics%20Reporter"
        >Get in touch</a>
      </div>
    </article>
  </div>
)

export default Jobs;
