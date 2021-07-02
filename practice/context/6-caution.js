import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

// 더하기 버튼 클릭시 불필요하게 greeing component가 호출됨! 
export default function App() {
  console.log('app')
  /* const [username, setUsername] = useState('nick');
  const [age, setAge] = useState(0); */
  const [user, setUser] = useState({ username: 'nick', age: 30 });
  const [count, setCount] = useState(0);
  return (
    <div>
        {/* <UserContext.Provider value={{ username, age }}> */}
        <UserContext.Provider value={user}>
          <Profile />
          <button onClick={() => setCount(count + 1)}>더해요</button>
        </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(() => {
  console.log('profile');
  return (
    <div>
      <Greeting />
      {/*  */}
    </div>
  );
});

function Greeting() {
  console.log('greeting');
  const { username } = useContext(UserContext);
  return (
    <p>{`${username}님 안녕하세요.`}</p>
  );
}