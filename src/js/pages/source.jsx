import React from 'react';
import Header from '../components/header.jsx';
const mkContent = require('../../content/open-source/*');
import WhyOpenSource from '../../content/why-open-source.md';

const projects = Object.keys(mkContent);

const cards = projects.map((f) => {

  const Component = mkContent[f];
  return (
    <div className='card'>
      <Component />
    </div>
  );
});

const Source = () => {
  return (
    <div className='page source'>
      <Header />
      <article>
        <h2>Why we open source</h2>
        <WhyOpenSource />
        <h2>Our stuff</h2>
        {cards}
      </article>
    </div>
  );
}

export default Source;
