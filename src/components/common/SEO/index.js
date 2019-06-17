import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {
  render() {
    const { title, description, url, shareImgUrl } = this.props;
    return (
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={url} />
        <link rel='stylesheet' type='text/css' href='https://www.politico.com/interactives/cdn/fonts/base-icons/politico-base-icons.min.css' />

        <link rel='icon' sizes='16x16' type='image/png' href='https://www.politico.com/favicon-16x16.png' />
        <link rel='icon' sizes='32x32' type='image/png' href='https://www.politico.com/favicon-32x32.png' />
        <link rel='icon' sizes='192x192' type='image/png' href='https://www.politico.com/android-chrome-192x192.png' />
        <link rel='icon' sizes='96x96' type='image/png' href='https://www.politico.com/favicon-96x96.png' />
        <meta property='twitter:site' content='@politico' />
        <meta property='article:author' content='https://www.facebook.com/politico' />
        <meta property='og:image' content={shareImgUrl} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <link rel='stylesheet' href='https://use.typekit.net/ogn0czn.css' />
        <script>
          {`try {
              Typekit.load({
                  async: true
              });
          } catch (e) {}`}
        </script>
      </Helmet>
    );
  }
}

export default Head;
