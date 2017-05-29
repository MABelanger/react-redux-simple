import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todoReducerObj = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id != action.id) {
        return state;
      }
      return Object.assign(
        {},
        state,
        {completed: !state.completed}
      );

    default:
      return state;
  }
};

const todoReducerList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducerObj(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todoReducerObj(todo, action)
      });
    default:
      return state;
  }
};


const visibilityFilterReducer = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default :
      return state;
  }
};

const mainReducer = (state = {}, action) => {
  return {
    todos: todoReducerList(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilterReducer(
      state.visibilityFilter,
      action
    )
  }
}

const store = createStore(mainReducer);

const printCurrentState = () => {
  console.log('current state:');
  console.log(store.getState());
}

printCurrentState();

console.log('Dispatching ADD_TODO.');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});

printCurrentState();

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'IS_COMPLETED'
});

printCurrentState();
