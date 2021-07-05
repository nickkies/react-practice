import React, { useState, useEffect } from 'react';

// 부수효과 함수를 동기로 호출!
// 많이 사용하면 느려짐...
export default function App() {
  const [width, setWidth] = useState(200);
  useEffect(() => {
    if ( width > 500 ) {
      setWidth(500);
    }
  }, [width]);
  return (
    <div>
      <div style={{ width, heigth: 100, backgroundColor: 'green'}}>test</div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() + 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}