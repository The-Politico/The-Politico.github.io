import React from 'react';
import Header from 'Components/common/Header';
import classnames from 'classnames';
import SEO from 'Components/common/SEO';

const FourOhFour = () => {
  return (
    <div className={classnames('page 404')}>
      <SEO
        title='404 - Page not found'
        url='/404.html'
        description=''
        shareImgUrl=''
      />
      <Header />
      <article>
        <section>
          <h2>404 Nope</h2>
        </section>
      </article>
    </div>
  );
};

export default FourOhFour;
