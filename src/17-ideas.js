import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {connect}  from 'react-redux';

import { Component } from 'react';

import myModule from './mymodule';


const render = () => {
  ReactDOM.render(
    <div>
    <myModule/>
    </div>,
    document.getElementById('app')
  )
}
render();
