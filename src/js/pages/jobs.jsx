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
      <div id="designer" className='card'>
        <Developer />
      </div>
      <div className='card'>
        <a
          className="button"
          href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=POLITICO%20Interactive%20News%20Jobs%20Developer"
        >Get in touch</a>
        <a
          className="button"
          href="https://recruiting.ultipro.com/PER1013PCLL/JobBoard/b972ff6a-41b7-4e97-9c71-273c2595c77d/OpportunityDetail?opportunityId=7b72921e-cdce-4cd4-8f71-acc2c9d35bbc"
        >
          Apply
        </a>
      </div>
      <div id="designer" className='card'>
        <Designer />
      </div>
      <div className='card'>
        <a
          className="button"
          href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=POLITICO%20Interactive%20News%20Jobs%20Designer"
        >Get in touch</a>
        <a
          className="button"
          href="https://recruiting.ultipro.com/PER1013PCLL/JobBoard/b972ff6a-41b7-4e97-9c71-273c2595c77d/OpportunityDetail?opportunityId=d2105718-f882-422c-80e4-bc7bc7117610"
        >
          Apply
        </a>
      </div>
    </article>
  </div>
)

export default Jobs;
