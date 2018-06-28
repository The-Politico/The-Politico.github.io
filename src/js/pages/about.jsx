import React from 'react';
import Header from '../components/header.jsx';
import staff from '../data/staff.json';
import Markdown from 'react-markdown';
import Staffer from '../components/staffer.jsx';
import WhatWeDo from '../../content/about/WhatWeDo.md';
import HowWeWork from '../../content/about/HowWeWork.md';
import QuestionImg from '../../images/question.png';
import { Link } from 'react-router-dom';

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
      <article className="big-well">
        <h2>Who we are</h2>
        {staffers}
        <div>
          <div className="staffer">
            <div className="topline">
              <div className="profile">
                <img src={QuestionImg} />
              </div>
              <div className="identity">
                <Link to="/jobs">
                  <h5>@YOU</h5>
                  <h4>Future politico</h4>
                  <p></p>
                </Link>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>

      </article>
      <div className="clear"></div>
      <article>
        <h2>How we work</h2>
        <HowWeWork/>
        <div className='card'>
          <a className="button" href="mailto:jmcclure@politico.com,lmihalik@politico.com?subject=Interactive%20News%20Jobs%20at%20POLITICO">Get in touch</a>
        </div>
      </article>
    </div>
  );
}

export default About;
