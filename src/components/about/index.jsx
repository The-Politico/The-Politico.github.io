import React from 'react';
import Header from 'Components/common/Header';
import ContactButtons from 'Components/common/ContactButtons';
import staff from 'Data/staff.json';
import Staffer from './Staffer.jsx';
import WhatWeDo from 'Content/about/WhatWeDo.md';
import HowWeWork from 'Content/about/HowWeWork.md';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { component } from './styles.scss';

const About = () => {
  const staffers = staff.map(staffer => <Staffer staffer={staffer} />);
  return (
    <div className={classnames(component, 'page about')}>
      <Header />
      <article>
        <h2>What we do</h2>
        <WhatWeDo />
        <ContactButtons />
      </article>
      <article className='big-well'>
        <h2>Who we are</h2>
        <div className='flex'>
          {staffers}
          <div>
            <div className='staffer'>
              <div className='topline'>
                <div className='profile'>
                  <img src='images/question.png' />
                </div>
                <div className='identity'>
                  <Link to='/jobs'>
                    <h5>@YOU</h5>
                    <h4>Future politico</h4>
                    <p />
                  </Link>
                </div>
              </div>
            </div>
            <div className='clear' />
          </div>
        </div>
      </article>
      <div className='clear' />
      <article>
        <h2>How we work</h2>
        <HowWeWork />
        <ContactButtons />
      </article>
    </div>
  );
};

export default About;
