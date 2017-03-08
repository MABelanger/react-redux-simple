import expect from 'expect';
import deepFreeze from 'deep-freeze';



const removeCounter = (list, index) => {
  // let listCopy = Object.assign([], list);
  // listCopy.splice(index, 1);
  // return listCopy;
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect( removeCounter(listBefore, 1) ).toEqual(listAfter);
}

const addCounter = (list) => {
  return [...list, 0];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect( addCounter(listBefore) ).toEqual(listAfter);
};



const incrementCounter = (list, index) => {
  let listCopy = Object.assign([], list);
  listCopy[index]++;
  return listCopy;
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);
  expect(incrementCounter(listBefore, 1))
    .toEqual(listAfter);
}
testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All test passed!');
