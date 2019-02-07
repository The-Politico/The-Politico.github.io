import About from 'Content/jobs/about.md';
import Header from 'Components/common/Header';
import React from 'react';
import Reporter from 'Content/jobs/graphics-reporter.md';
import classnames from 'classnames';

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
      <div className='card'>
        <a
          className='button'
          href='mailto:jmcclure@politico.com,lmihalik@politico.com?subject=POLITICO%20Interactive%20News%20Jobs%20Graphics%20Reporter'
        >Get in touch</a>
        <a
          className='button'
          href='https://recruiting.ultipro.com/PER1013PCLL/JobBoard/b972ff6a-41b7-4e97-9c71-273c2595c77d/OpportunityDetail?opportunityId=0d3cfe8f-39a0-4b92-b6b5-42825bbd6486'
        >
          Apply
        </a>
      </div>
    </article>
  </div>
);

export default Jobs;
