import Header from 'Components/common/Header';
import React from 'react';
import classnames from 'classnames';
import ContactButtons from 'Components/common/ContactButtons';

import DeveloperJob from 'Content/jobs/newsapps-developer.md';
import WhyPolitico from 'Content/jobs/why-politico.md';
import WhyInteractive from 'Content/jobs/why-interactive-news.md';

import { component } from './styles.scss';

const Jobs = () => (
  <div className={classnames(component, 'page jobs')}>
    <Header />
    <article>
      <h1>Jobs</h1>
      <div id='designer' className='card'>
        <DeveloperJob />
        <WhyInteractive />
        <WhyPolitico />
      </div>
      <ContactButtons />
    </article>
  </div>
);

export default Jobs;
