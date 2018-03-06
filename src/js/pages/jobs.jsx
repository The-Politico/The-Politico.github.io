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
      <Designer />
      <Developer />
    </article>
  </div>
)

export default Jobs;
