import ReactDOM from 'react-dom';
import React from 'react';

const add = (a, b) => {
  return a + b;
};

function mul(a, b){
  return a * b;
}

const AddComponent = ({a, b}) => {
  return (
    <div>
      {a} + {b} = { add(a,b) }
    </div>
  );
};

const MulComponent = ({a, b}) => {
  return (
    <div>
      {a} * {b} = { mul(a,b) }
    </div>
  );
};

const opList = [
  {
    'a' : 1,
    'b' : 2
  },
  {
    'a' : 2,
    'b' : 4
  },
  {
    'a' : 10,
    'b' : 20
  },
  {
    'a' : 4,
    'b' : 5
  },
];

const ListComponent = () => {
  return (
    <div>
        {
          opList.map( ({a,b}) => {
            return (
              <div key={a}>
                <AddComponent a={a} b={b} />
                <MulComponent a={a} b={b} />
                <br/>
              </div>
            );
          })
        }
    </div>
  );
}

ReactDOM.render(
  <div>
    <ListComponent/>
  </div>,
  document.getElementById('app')
)
