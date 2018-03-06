import React from 'react';
const mkContent = require('../../content/about/profiles/*');

console.log(mkContent);

const Staffer = (props) => {
  const About = mkContent[props.staffer.about];
  return (
    <div className="staffer">
      <div className="topline">
        <div className="profile">
          <img src={props.staffer.image} />
        </div>
        <div className="identity">
          <h4>{props.staffer.name}</h4>
          <p>{props.staffer.title}</p>
        </div>
      </div>
      <div className='about'>
        <About />
      </div>
    </div>
  );
}

export default Staffer;
