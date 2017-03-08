#!/bin/bash

echo 'Install dependencies'
npm install --save react
npm install --save react-dom

echo 'Install DevDependencies'
#npm install --save-dev babel-preset-react babel-preset-es2015 webpack
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
npm install --save-dev babel-loader
npm install --save-dev babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react

echo 'Install babel-node to run webpack-dev-server'
npm install --save-dev babel-cli
