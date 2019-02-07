import { Link } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Header = (props) => {
  return (
    <div className={classnames(component)}>
      <header >
        <div className='left'>
          <Link to='/'>
            <div className='brand'>
              <b className='icon icon-politico' /> interactives
            </div>
          </Link>
        </div>
        <nav>
          <Link to='/about'><span className='is-hidden-mobile'>Our team</span><span className='is-hidden-tablet'>Team</span></Link>
          <Link to='/jobs'>Jobs</Link>
          <Link to='/open-source'><span className='is-hidden-mobile'>Open source</span><span className='is-hidden-tablet'>Code</span></Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
