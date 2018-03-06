import React from 'react';
import Header from '../components/header.jsx';
import staff from '../data/staff.json';
import Markdown from 'react-markdown';
import Staffer from '../components/staffer.jsx';
const mkContent = require('../../content/about/*');

const WhatWeDo = mkContent['WhatWeDo.md'];
const HowWeWork = mkContent['HowWeWork.md'];

const About = () => {
  const staffers = staff.map(staffer => (
    <Staffer staffer={staffer}/>
  ));
  return (
    <div className='page about'>
      <Header />
      <article>
        <h2>What we do</h2>
        <WhatWeDo/>
      </article>
      <article>
        <h2>Who we are</h2>
        {staffers}
      </article>
      <article>
        <h2>How we work</h2>
        <HowWeWork/>
      </article>
    </div>
  );
}

export default About;
