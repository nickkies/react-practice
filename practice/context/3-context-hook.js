import React, { createContext, useState, useContext } from 'react';

// 상관 없는 애들은 렌더링 하지 않기 위한 방법
const UserContext = createContext('unknown');

export default function App() {
  const [name, setName] = useState('nick');
  console.log('app');
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </UserContext.Provider>
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

// 훅을 사용하면 간단하게 작성 가능!
// 가장 가까운 상위의 Rrovider를 찾고 없을 시 기본값 사용함
function Greeting() {
  console.log('greeting');
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요.`}</p>
}