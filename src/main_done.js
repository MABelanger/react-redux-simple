import expect from 'expect';
import deepFreeze from 'deep-freeze';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
// Need to npm i --save react-redux
import { Provider, connect } from 'react-redux';

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

let nextTodoId = 0;
let AddTodo = ( { dispatch } ) => {
  let myInput;
  return (
  <div>
    <input ref={node => {
      myInput = node;
    }}/>
    <button onClick={() => {
      dispatch({
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
// Generate a container component that does not subscribe to the store
// but pass dispatch to the component that it wrap 'AddTodo'
// Default behaviour without argument () is to not connect to the store and only
// inject dispatch
AddTodo = connect()(AddTodo);

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
// ownProps is not the props passed down to the child
// the props passed down to the child is props.
const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active : ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick : () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  };
}

 // Return a Container component with state and props linked to the store.
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

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

const mapStateToTodoListProps = (
  state
) => {
  return {
    todos : getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
};
const mapDispatchToTodoListProps = (
  dispatch
) => {
  return {
    onTodoClick : (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const render = () => {
  ReactDOM.render(
    <Provider store = {createStore(todoApp)}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
}

render();
