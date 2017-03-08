#!/bin/bash
echo 'Create main.js file'
cat > ./main.js <<DELIM
import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('app'));
DELIM

echo 'Create index.html file'
cat > ./index.html <<DELIM
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello React</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
DELIM

echo 'Create webpack.config.js file'
cat > ./webpack.config.js <<DELIM
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
DELIM
