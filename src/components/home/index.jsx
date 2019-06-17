import { Link } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import Chart from './chart';
import SEO from 'Components/common/SEO';
import seo from 'Content/home/seo';

const Header = () => (
  <div className={classnames(component, 'page home')}>
    <SEO {...seo} />
    <section className='hero is-fullheight'>
      <Chart />
      <div className='center-box'>
        <div className='brand'>
          <b className='icon icon-politico' />
        </div>
        <h1>Interactive News</h1>
        <nav className='links'>
          <Link to='/jobs/'>Jobs</Link>
          <Link to='/team/'>Team</Link>
          <Link to='/code/'>Code</Link>
          <Link to='/blog/'>Blog</Link>
        </nav>
      </div>
    </section>
  </div>
);

export default Header;
