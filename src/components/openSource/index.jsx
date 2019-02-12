import * as mkContent from 'Content/open-source';

import Header from 'Components/common/Header';
import React from 'react';
import WhyOpenSource from 'Content/why-open-source.md';
import classnames from 'classnames';

import { component } from './styles.scss';

const projects = Object.keys(mkContent);

projects.sort();

const cards = projects.map(f => {
  const Component = mkContent[f];
  return (
    <div className='card'>
      <Component />
    </div>
  );
});

const Source = () => {
  return (
    <div className={classnames(component, 'page source')}>
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
