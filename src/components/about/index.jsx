import React from 'react';
import Header from 'Components/common/Header';
import ContactButtons from 'Components/common/ContactButtons';

import Staffer from './Staffer.jsx';
import WhatWeDo from 'Content/about/WhatWeDo.md';
import HowWeWork from 'Content/about/HowWeWork.md';
import staff from 'Content/about/staff.json';
import classnames from 'classnames';

import SEO from 'Components/common/SEO';
import seo from 'Content/about/seo';

import { component } from './styles.scss';

const About = () => {
  const staffers = staff.map(staffer => <Staffer staffer={staffer} />);
  return (
    <div className={classnames(component, 'page about')}>
      <SEO {...seo} />
      <Header />
      <article>
        <section>
          <h2>What we do</h2>
          <WhatWeDo />
        </section>
        <section>
          <h2>Who we are</h2>
          <div className='flex'>
            {staffers}
          </div>
        </section>
        <section>
          <h2>How we work</h2>
          <HowWeWork />
        </section>
      </article>
    </div>
  );
};

export default About;
