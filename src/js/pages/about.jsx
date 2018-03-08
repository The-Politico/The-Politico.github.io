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
      <article class="big-well">
        <h2>Who we are</h2>
        {staffers}
      </article>
      <div class="clear"></div>
      <article>
        <h2>How we work</h2>
        <HowWeWork/>
        <div className='card'>
          <a class="button" href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=Interactive%20News%20Jobs%20at%20POLITICO">Get in touch</a>
        </div>
      </article>
    </div>
  );
}

export default About;
