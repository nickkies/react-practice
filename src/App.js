import React from 'react';
import produce from 'immer';

const prevState = {
  user: {
    name: 'nick',
    kids: [
      {
        name: 'jin',
        age: 3,
      },
      {
        name: 'jun',
        age: 5
      }//,
    ]//,
  },
  products: [],
};
const nextState = produce(prevState, draft => {
  draft.user.kids[0].age = 6;
});
console.log(
  'prevState === nextState',
  prevState === nextState
);
console.log(
  'prevState.user.kids[0] === nextState.user.kids[0]',
  prevState.user.kids[0] === nextState.user.kids[0]
);
console.log(
  'prevState.user.kids[1] === nextState.user.kids[1]',
  prevState.user.kids[1] === nextState.user.kids[1]
);
console.log(
  'prevState.products === prevState.products',
  prevState.products === nextState.products,
)

export default function App() {
  return (
    <div>
        Hello there
    </div>
  );
}