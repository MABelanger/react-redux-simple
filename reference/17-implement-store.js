import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';


const FilterLink = ({ filter, children, currentFilter}) => {
  const onClickAction = (e)=> {
    e.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }
  if(currentFilter == filter) {
    return (
      <span>{children}</span>
    );
  }
  return (
    <a href='#' onClick={onClickAction}>
      {children}
    </a>
  )
};

const getVisibleTodos = (todos, filter) => {
  console.log('filter', filter)
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
         t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}

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

const mainReducer = combineReducers({
  todos: todoReducerList,
  visibilityFilter: visibilityFilterReducer
})

// const mainReducer = (state = {}, action) => {
//   return {
//     todos: todoReducerList(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilterReducer(
//       state.visibilityFilter,
//       action
//     )
//   }
// }




let nextTodoId = 0;
const addTodoEvent = () => {
  store.dispatch({
    type: 'ADD_TODO',
    text: 'Test',
    id: nextTodoId++
  });
}

class TodoComponent extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos( todos, visibilityFilter );
    return (
      <div>
      <input ref={node => {
        this.input = node;
      }} />

        <button onClick={ () => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = '';
          }
        }>Add Todo</button>
        <ul>{
              visibleTodos.map(function (todo){
                return (
                  <li
                    key={todo.id}
                    onClick={(e)=>{
                      store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: todo.id
                      });
                    }}
                    style={{
                      textDecoration:
                        todo.completed ?
                          'line-through' :
                          'none '
                    }}
                    >
                    {todo.text}
                  </li>
                )
              })
            }
        </ul>
        <p>
          Show:
          {'  '}
          <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {'  '}
          <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {'  '}
          <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
const render = () => {
  console.log('store.getState()', store.getState())
  ReactDOM.render(
    <TodoComponent visibilityFilter={store.getState().visibilityFilter} todos={store.getState().todos}/>,
    document.getElementById('app')
  );
}

const store = createStore(mainReducer);
console.log('store.getState()', store.getState().todos)

store.subscribe(render);
render();
