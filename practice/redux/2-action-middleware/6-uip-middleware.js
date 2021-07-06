import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const printLog = store => next => action => {
  console.log(`prev state = ${store.getState().name}`);
  const result = next(action);
  console.log(`next state = ${store.getState().name}`);
  return result;
};
const myReducer = (state = { name: 'nick' }, action) => {
  console.log('myReducer');
  if ( action.type === 'someAction' ) {
    return { name : 'jessy' }
  }
  return state;
};
const store = createStore(myReducer, applyMiddleware(printLog));
store.dispatch({ type: 'someAction' });

export default function App() {
  return (
    <div>
        Hello there
    </div>
  );
}