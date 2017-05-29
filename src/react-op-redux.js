import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

import mymodule from './mymodule';


const opReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_OP':
      return [
        ...state,
        action.op
      ]
    default :
      return state
  }
};

const txtReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TXT':
      return [
        ...state,
        action.op
      ]
    default :
      return state
  }
};

const mainReducer = combineReducers({
  op:opReducer,
  txtReducer
})

const store = createStore(mainReducer);

console.log('before after dispatch', store.getState())

store.dispatch({
  type: 'ADD_OP',
  op: {'a': 1, 'b': 1}
});

store.dispatch({
  type: 'ADD_OP',
  op: {'a': 2, 'b': 2}
});

console.log('store after dispatch', store.getState())

const RootComponent = ({op}) => {
  console.log('op', op)
  return (
    <div>
      {
        op.map( (op) => {
          return(
            <div key={op.a}>
              <div>{op.a}+{op.b} = {op.a+op.b}</div>
              <div>{op.a}*{op.b} = {op.a*op.b}</div>
            </div>
          )
        })
      }
    </div>
  );
}

ReactDOM.render(
    <RootComponent op={ store.getState().op }/>,
    document.getElementById('app')
);
