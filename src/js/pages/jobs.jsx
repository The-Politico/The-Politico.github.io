import React from 'react';
import Header from '../components/header.jsx';

import About from '../../content/jobs/about.md';
import Designer from '../../content/jobs/designer.md';
import Developer from '../../content/jobs/developer.md';

const Jobs = () => (
  <div className='page jobs'>
    <Header />
    <article>
      <h2>Jobs</h2>
      <About />
      <div className='card'>
        <Designer />
      </div>
      <div className='card'>
        <Developer />
      </div>
      <div className='card'>
        <a class="button" href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=Interactive%20News%20Jobs%20at%20POLITICO">Get in touch</a>
      </div>
    </article>
  </div>
)

export default Jobs;
