#!/bin/bash

# Path to bash variables
PATH_BABEL_NODE='node_modules/babel-cli/bin/babel-node.js'
PATH_WEBPACK_DEV_SERVER='node_modules/webpack-dev-server/bin/webpack-dev-server.js'
WEBPACK_DEV_SERVER_CLI="node $PATH_BABEL_NODE $PATH_WEBPACK_DEV_SERVER"
# Run webpack-dev-server

echo "$WEBPACK_DEV_SERVER_CLI --progress --colors"
echo ""
eval "$WEBPACK_DEV_SERVER_CLI --progress --colors"
