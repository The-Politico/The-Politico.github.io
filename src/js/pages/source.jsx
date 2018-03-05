import React from 'react';
const mkContent = require('../../content/open-source/*');

const projects = Object.keys(mkContent);

console.log('projects', projects);

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
      <h2>Our stuff</h2>
      {cards}
    </div>
  );
}

export default Source;
