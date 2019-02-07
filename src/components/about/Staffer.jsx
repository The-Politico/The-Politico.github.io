import React from 'react';

const Staffer = (props) => {
  return (
    <div>
      <div className='staffer'>
        <div className='topline'>
          <div className='profile'>
            <img src={props.staffer.image} />
          </div>
          <div className='identity'>
            <a target='blank' href={`https://twitter.com/${props.staffer.twitter}`}>
              <h5>@{props.staffer.twitter}</h5>
              <h4>{props.staffer.name}</h4>
              <p>{props.staffer.title}</p>
            </a>
          </div>
        </div>
      </div>
      <div className='clear' />
    </div>
  );
};

export default Staffer;
