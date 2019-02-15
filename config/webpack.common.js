const path = require('path');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      'whatwg-fetch',
      path.join(__dirname, '../src/App.jsx'),
    ],
  },
  output: {
    filename: `[name].[contenthash].js`,
    path: path.join(__dirname, '../'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Common: path.resolve(__dirname, '../src/common/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Content: path.resolve(__dirname, '../src/content/'),
      Data: path.resolve(__dirname, '../src/data/'),
      Templates: path.resolve(__dirname, '../src/templates/'),
      Theme: path.resolve(__dirname, '../src/theme'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': {
                  'browsers': 'last 2 versions',
                },
              }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/proposal-class-properties',
            ],
          },
        },
      }, {
        test: /\.md$/,
        loader: '@politico/markdown-react-loader',
      },
    ],
  },
};
