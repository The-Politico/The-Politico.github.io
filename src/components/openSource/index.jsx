import Header from 'Components/common/Header';
import React from 'react';
import WhyOpenSource from 'Content/code/why-open-source.md';
import classnames from 'classnames';
import seo from 'Content/code/seo';
import SEO from 'Components/common/SEO';
import ReactMarkdown from 'react-markdown';
import OSS from 'Code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { component } from './styles.scss';

const projects = Object.keys(OSS);

projects.sort();

const cards = projects.map(f => {
  const { content, data } = OSS[f];
  const tags = data.tags && data.tags.map(tag => (
    <span className='tag'>{tag}</span>
  ));
  return (
    <div className='card' key={f}>
      <ReactMarkdown source={content} />
      {data.tags && (
        <div className='tags'>{tags}</div>
      )}
      {data.docs && (
        <div className='docs'>
          <a href={data.docs} target='_blank'>
            <FontAwesomeIcon icon={faBook} /> Read the docs
          </a>
        </div>
      )}
    </div>
  );
});

const Source = () => {
  return (
    <div className={classnames(component, 'page source')}>
      <SEO {...seo} />
      <Header />
      <article>
        <h2>Why we open source</h2>
        <WhyOpenSource />
        <h2>Our work</h2>
        {cards}
      </article>
    </div>
  );
};

export default Source;
