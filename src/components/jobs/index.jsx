import About from 'Content/jobs/about.md';
import Header from 'Components/common/Header';
import React from 'react';
import Reporter from 'Content/jobs/graphics-reporter.md';
import classnames from 'classnames';
import ContactButtons from 'Components/common/ContactButtons';

import { component } from './styles.scss';

const Jobs = () => (
  <div className={classnames(component, 'page jobs')}>
    <Header />
    <article>
      <h2>Jobs</h2>
      <About />
      <div id='designer' className='card'>
        <Reporter />
      </div>
      <ContactButtons />
    </article>
  </div>
);

export default Jobs;
