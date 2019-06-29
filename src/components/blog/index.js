import { Link } from 'react-router-dom';
import Header from 'Components/common/Header';
import React from 'react';
import classnames from 'classnames';
import { apdate } from 'journalize';
import humanizeList from 'humanize-list';
import SEO from 'Components/common/SEO';
import seo from 'Content/blog/seo';

import BlogPosts from 'Blog';

import { component } from './styles.scss';

const posts = Object.keys(BlogPosts);

posts.sort((a, b) => new Date(b) - new Date(a));

const links = posts.map((p) => {
  const post = BlogPosts[p];
  const date = new Date(p + 'T04:00:00');
  return (
    <div className='post' key={p}>
      <h3><Link to={`/blog/${p}/${post.slug}/`}>{post.title}</Link></h3>
      <h5>{apdate(date)} by {humanizeList(post.authors.map(a => a.name))}</h5>
    </div>
  );
});

const Blog = () => {
  return (
    <div className={classnames(component, 'page blog')}>
      <SEO {...seo} />
      <Header />
      <article>
        <h2>Latest</h2>
        <div>
          {links.length > 0 ? links : (
            <p>Check back soon. We're writing...</p>
          )}
        </div>
      </article>
    </div>
  );
};

export default Blog;
