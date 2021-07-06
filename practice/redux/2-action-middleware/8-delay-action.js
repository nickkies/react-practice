import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const delayAction = store => next => action => {
  // const delay = action.meta && action.meta.delay;
  const delay = action.meta?.delay;
  if ( !delay ) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  }
};

const myReducer = (state = { name: 'nick' }, action) => {
  console.log('myReducer');
  if ( action.type === 'someAction' ) {
    return { name : 'jessy' }
  }
  return state;
};
const store = createStore(myReducer, applyMiddleware(delayAction));
const cancel = store.dispatch({ type: 'someAction', meta: { delay: 3000 } });
cancel();

export default function App() {
  return (
    <div>
        Hello there
    </div>
  );
}