import React, { useState, useLayoutEffect, useRef } from 'react';

// 부수효과 함수를 동기로 호출!
// 많이 사용하면 느려짐...
export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();

  // useEffect(() => {
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if ( width > 500 ) {
      setWidth(500);
    }
    /* let v = 0;
    for ( let i = 0; i < 1000000000; i++ ) {
      v += i *2 + 1;
    }
    console.log(v) */
  }, [width]);
  return (
    <div>
      <div ref={boxRef} style={{ width, heigth: 100, backgroundColor: 'green'}}>test</div>
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