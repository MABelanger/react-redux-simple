import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {connect}  from 'react-redux';

import { Component } from 'react';

class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <input ref={node => {
          this.myNode = node;
        }}/>
        <button onClick={(e) => {
          this.myNode.value = '';
        }}>
          Add ...
        </button>
      </div>
    )
  }
}

const reducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [
        ...state,
        action.todo
      ]
    default :
      return state
  }
}



const render = () => {
  ReactDOM.render(
    <div>
    <TodoApp myProp1={"hello"}/>
    <br/> Hello
    <someValue2/>
    </div>,
    document.getElementById('app')
  )
}
render();

const store = createStore(reducer);
store.subscribe(render);


const addTodo = () => {
  return {
    type: 'ADD_TODO',
    todo: 'hello'
  }
}
store.dispatch(addTodo());

function mapStateToProps(state, ownProps){
  return {
    stateTodo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addTodo, dispatch)
  };
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectStateAndProps(TodoApp);
