import { NavLink as Link } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import Chart from './chart';
import { component } from './styles.scss';

const Header = props => {
  return (
    <div className={classnames(component)}>
      <header>
        <div className='global-brand'>
          <Link to='/'>
            <div className='brand'><b className='icon icon-politico' /></div>
            <div className='team'>Interactives</div>
          </Link>
        </div>
        <Chart />
        <nav>
          <span>
            <Link activeClassName='active' to='/jobs/'>Jobs</Link>
          </span>
          <Link activeClassName='active' to='/team/'>
            <span className='is-hidden-mobile'>Our team</span>
            <span className='is-hidden-tablet'>Team</span>
          </Link>
          <Link activeClassName='active' to='/code/'>
            <span className='is-hidden-mobile'>Open source</span>
            <span className='is-hidden-tablet'>Code</span>
          </Link>
          <span>
            <Link activeClassName='active' to='/blog/'>
              Blog
            </Link>
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
