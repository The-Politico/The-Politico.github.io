import Header from 'Components/common/Header';
import CodeRenderer from 'Components/common/CodeRenderer';
import ImageRenderer from 'Components/common/ImageRenderer';
import React from 'react';
import classnames from 'classnames';
import SEO from 'Components/common/SEO';
import BlogPosts from 'Blog';
import { apdate } from 'journalize';
import ReactMarkdown from 'react-markdown';

import * as matter from 'gray-matter';
import Author from './Author';
import { component } from './styles.scss';

const ParagraphRenderer = ({ children }) => {
  const hasImage = !!children.find(
    (child) => typeof child === 'object' && child.key && !!child.key.match(/image/g)
  );
  return hasImage ? children : <p>{children}</p>;
};

class Post extends React.Component {
  state = {
    content: null,
  }
  componentDidMount() {
    const { date } = this.props.match.params;
    const fetchPrefix = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ?
      '' : 'https://raw.githubusercontent.com/The-Politico/The-Politico.github.io/master';
    fetch(`${fetchPrefix}/statics/posts/${date}.md`)
      .then(response => response.text())
      .then(string => {
        this.setState({
          content: matter(string).content,
        });
      });
  }
  render() {
    const { date, id } = this.props.match.params;
    const post = BlogPosts[date];
    const { content } = this.state;
    const datetime = new Date(date + 'T04:00:00');
    const authors = post.authors.map((a, i) => (
      <Author
        {...a}
        i={i}
        length={post.authors.length}
      />
    ));
    return (
      <div className={classnames(component, 'page post')}>
        <SEO
          title={post.title}
          description='Posts from POLITICO Interactive News.'
          url={`/blog/${date}/${id}/`}
          shareImgUrl={post.shareImg || '/statics/images/share_blog.jpg'}
        />
        <Header />
        <article>
          <header>
            <h1>{post.title}</h1>
            <p className='byline'>
              <time
                itemProp='datePublished'
                dateTime={date}
              >
                {apdate(datetime)}
              </time> ⁠• {authors}
            </p>
          </header>
          {
            content ? (
              <ReactMarkdown
                escapeHtml={false}
                linkTarget='_blank'
                renderers={{
                  code: CodeRenderer,
                  image: ImageRenderer,
                  paragraph: ParagraphRenderer,
                }}
                source={content}
              />
            ) : (<h4>Loading...</h4>)
          }
        </article>
      </div>
    );
  }
};

export default Post;
