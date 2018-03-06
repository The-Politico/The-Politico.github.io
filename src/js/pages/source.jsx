import React from 'react';
import Header from '../components/header.jsx';
const mkContent = require('../../content/open-source/*');

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
        <h2>Our stuff</h2>
        {cards}
      </article>
    </div>
  );
}

export default Source;
