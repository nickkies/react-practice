import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const saveToLocalStorage = store => next => action => {
  if ( action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};

const myReducer = (state = { name: 'nick' }, action) => {
  console.log('myReducer');
  if ( action.type === 'someAction' ) {
    return { name : 'jessy' }
  }
  return state;
};
const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({ 
  type: 'someAction', 
  title: 'nick', 
  meta: { localStorageKey: 'myKey' } 
});

export default function App() {
  return (
    <div>
        Hello there
    </div>
  );
}