import React from 'react';
import staff from '../data/staff.json';
import Markdown from 'react-markdown';
const mkContent = require('../../content/about/*');

console.log(mkContent['Team.md']);

const Team = mkContent['Team.md'];

const About = () => {
  const staffers = staff.map(staffer => (
    <div>{staffer.name}</div>
  ));
  return (
    <div className='page about'>
      <h2>About</h2>
      <Team/>
      {staffers}
    </div>
  );
}

export default About;
