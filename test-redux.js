import expect from 'expect';
import deepFreeze from 'deep-freeze';

const delegateTodoReducer = (todo, action) =>{
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(todo.id != action.id) {
        return todo;
      }
      return Object.assign(
        {},
        todo,
        {completed: !todo.completed}
      );

    default:
      return todo;
  }
};

const todoReducer = (state = [], action) =>{
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        delegateTodoReducer(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return delegateTodoReducer(todo, action)
      });
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todoReducer(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];

  const action = {
    type : 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todoReducer(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log('All tests has passed');
