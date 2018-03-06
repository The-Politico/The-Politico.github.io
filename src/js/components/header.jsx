import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div className='left'>
        <Link to="/">
          <div className='brand'>
            <b className="icon icon-politico" /> interactives
          </div>
        </Link>
      </div>
      <nav>
        <Link to="/about">Our team</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/open-source">Open source</Link>
      </nav>
    </header>
  )
}

export default Header;
