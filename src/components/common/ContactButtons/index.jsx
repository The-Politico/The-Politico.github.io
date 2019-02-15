import React from 'react';
import styles from './styles.scss';

const ContactButtons = props => (
  <div className={styles.component + ' class-name'}>
    <a
      className='button'
      href='mailto:jmcclure@politico.com,lmihalik@politico.com?subject=POLITICO%20Interactive%20News%20Jobs%20News%20Apps%20Developer'
    >
      Get in touch
    </a>
    <a
      className='button'
      href='https://recruiting.ultipro.com/PER1013PCLL/JobBoard/b972ff6a-41b7-4e97-9c71-273c2595c77d/OpportunityDetail?opportunityId=7112cd6c-7476-452e-b306-4bacf80d855a'
    >
      Apply
    </a>
  </div>
);

export default ContactButtons;
