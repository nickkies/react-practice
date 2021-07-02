import React, { createContext, useContext } from 'react';

// 변경이 필요한 context 부분 만 변경하기 위해 여러개의 context도 사용가능
const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  console.log('app');
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="nick">
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Profile() {
  console.log('profile');
  return (
    <div>
      <Greeting />
      {/*  */}
    </div>
  );
}

function Greeting() {
  console.log('greeting');
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === "dark" ? "gray" : "green" }}
    >{`${username}님 안녕하세요.`}</p>
  );
}