import React from 'react';

const isSingle = length => length === 1;

const isLast = (i, length) => i + 1 === length;

const isPenultimate = (i, length) => i + 2 === length;

const joiner = (props) => {
  const { i, length } = props;
  if (isSingle(length) || isLast(i, length)) return '';
  if (isPenultimate(i, length)) return ' and';
  return ',';
};

const Author = (props) => (
  <div className='author'>
    <a href={props.link}>
      {props.name}
    </a>{joiner(props)}&nbsp;
  </div>
);

export default Author;
