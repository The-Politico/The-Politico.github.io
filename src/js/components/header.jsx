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
        <Link to="/about"><span class="is-hidden-mobile">Our team</span><span class="is-hidden-tablet">Team</span></Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/open-source"><span class="is-hidden-mobile">Open source</span><span class="is-hidden-tablet">Code</span></Link>
      </nav>
    </header>
  )
}

export default Header;
