import { Link } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Header = props => {
  return (
    <div className={classnames(component)}>
      <header>
        <div className='home'>
          <Link to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20px'
              version='1.1'
              x='0px'
              y='0px'
              viewBox='0 0 100 100'
              enableBackground='new 0 0 100 100'
              xmlSpace='preserve'
            >
              <path d='M79.5,81.458h-57V41.27L51,16.729L79.5,41.27V81.458z M25.5,78.458h51V42.646L51,20.688L25.5,42.646V78.458z' />
            </svg>
          </Link>
        </div>
        <div className='global-brand'>
          <Link to='https://www.politico.com/'>
            <div className='brand'>
              <b className='icon icon-politico' />
            </div>
          </Link>
        </div>
        <nav>
          <Link to='/about'>
            <span className='is-hidden-mobile'>Our team</span>
            <span className='is-hidden-tablet'>Team</span>
          </Link>
          <span>
            <Link to='/jobs'>Jobs</Link>
          </span>
          <Link to='/open-source'>
            <span className='is-hidden-mobile'>Open source</span>
            <span className='is-hidden-tablet'>Code</span>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
