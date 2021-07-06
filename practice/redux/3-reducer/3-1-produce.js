import produce from 'immer';

const person = { name: 'nick', age: 30 };
const newPerson = produce(person, draft => {
  draft.age = 31;
});