import expect from 'expect';
import deepFreeze from 'deep-freeze';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
// Need to npm i --save react-redux
// import { Provider } from 'react-redux';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO': {
      if ( state.id !== action.id) {
        return state;
      }
      return Object.assign(state,
        {completed: !state.completed}
      );
    }
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// stateField name : reducer manager


const todoApp = combineReducers({
  todos,
  visibilityFilter
});





// Presentation component
const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    style={ { textDecoration:
      completed ?
      'line-through' :
      'none'
    } }
    onClick={onClick}
    >
    {text}
  </li>
)

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => {
      return(
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      );
    })}
  </ul>
)

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter( todo => todo.completed )
    case 'SHOW_ACTIVE' :
      return todos.filter( todo => !todo.completed )
  }
}

const AddTodo = ( props, { store } ) => {
  let myInput;
  return (
  <div>
    <input ref={node => {
      myInput = node;
    }}/>
    <button onClick={() => {
      store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: myInput.value
      })
      myInput.value = ''; // clear the input field after dispatch
    }}>
      Add todo
    </button>
  </div>
)};
AddTodo.contextTypes = {
  store: React.PropTypes.object
}

const Link = ({
  active,
  children,
  onClick
} ) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick()
      }}
    >{children}</a>
  );
};

class FilterLink extends Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const {store} = this.context;
    // Now we get visibilityFilter from the store not from props.
    const state = store.getState();

    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    <FilterLink
      filter='SHOW_ALL'
    >All</FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >Active</FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >Completed</FilterLink>
  </p>
)

// As same as connect function()
class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={ id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

let nextTodoId = 0;
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);


class Provider extends Component {
  getChildContext() {
     return {
       store: this.props.store
     }
  }
  render() {
    return this.props.children;
  }
}

// We need to specify the store type to the Provider
Provider.childContextTypes = {
  store: React.PropTypes.object
}

const render = () => {
  ReactDOM.render(
    <Provider store = {createStore(todoApp)}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
}

render();

// 22-egghead--22
