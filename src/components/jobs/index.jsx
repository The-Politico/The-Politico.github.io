import Header from 'Components/common/Header';
import React from 'react';
import classnames from 'classnames';
import ContactButtons from 'Components/common/ContactButtons';
import JOBS from 'Jobs';
import WhyPolitico from 'Content/jobs/why-politico.md';
import WhyInteractive from 'Content/jobs/why-interactive-news.md';
import ReactMarkdown from 'react-markdown';
import seo from 'Content/jobs/seo';
import SEO from 'Components/common/SEO';

import { component } from './styles.scss';

const jobs = Object.keys(JOBS).map((j) => {
  const { content, data } = JOBS[j];
  return (
    <div className='job'>
      <h2>{data.title}</h2>
      <ReactMarkdown source={content} />
      <ContactButtons apply={data.apply} />
    </div>
  );
});

const Jobs = () => (
  <div className={classnames(component, 'page jobs')}>
    <SEO {...seo} />
    <Header />
    <article>
      <div id='designer' className='card'>
        {jobs}
        <WhyInteractive />
        <WhyPolitico />
      </div>
    </article>
  </div>
);

export default Jobs;
