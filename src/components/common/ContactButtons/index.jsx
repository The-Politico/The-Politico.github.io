import React from 'react';
import styles from './styles.scss';

const ContactButtons = props => (
  <div className={styles.component}>
    <a
      className='button'
      href='mailto:jmcclure@politico.com?subject=Interactive%20News%20jobs'
    >
      Get in touch
    </a>
    {props.apply && (
      <a className='button' href={props.apply}>
        Apply
      </a>
    )}
  </div>
);

export default ContactButtons;
