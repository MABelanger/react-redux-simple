#!/bin/bash
echo "That will create a package.json file, just accept the default to the question"
read -n1 -r -p "Press key to continue..." key

if [ "$key" = '' ]; then
	./install_script/npm-init.sh
fi


echo "That will create all the minimum files index.html, main.js, webpack.config.json"
read -n1 -r -p "Press key to continue..." key

if [ "$key" = '' ]; then
	./install_script/create-files.sh
fi


echo "That will install all npm needed to run React + ES6"
read -n1 -r -p "Press key to continue..." key

if [ "$key" = '' ]; then
	./install_script/npm-install.sh
fi

echo "That will run webpack-dev-server so it can be show in the browser at"
echo "http://localhost:8080/"
read -n1 -r -p "Press key to continue..." key

if [ "$key" = '' ]; then
	./install_script/webpack-dev-server.sh
fi
