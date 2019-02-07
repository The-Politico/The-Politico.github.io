import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Header = () => (
  <div className={classnames(component, 'page home')}>
    <section className='hero is-fullheight'>
      <div className='center-box'>
        <div className='brand'>
          <b className='icon icon-politico' />
        </div>
        <h1>
          <span>interactive</span>
          <span>interactive</span>
          <span>interactive</span>
          <span>interactive</span>
          <span>interactive</span>
          <span>news.</span>
        </h1>
        <nav className='links'>
          <Link to='/about'>Our team</Link>
          <Link to='/jobs'>Jobs</Link>
          <Link to='/open-source'>Open source</Link>
        </nav>
        <div className='github'>
          <a href='https://github.com/The-Politico'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Header;
