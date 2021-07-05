import React, { useReducer } from 'react';

// reducer와 context api를 이용하면 트리 아래까지 사용하기 쉬움
export const ProfileDispatch = React.createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITAIL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomComponent />
      </ProfileDispatch.Provider>
    </div>
  )
}

const INITAIL_STATE = { name: 'empty', age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
        return { ...state, age: action.age };
    default:
      return state;
  }
}