import React, { useRef, useEffect } from 'react';

// 랜더링과 상관없을 때는 ref가 더 적합함.
export default function App() {
  const timerIdRef = useRef(-1);
  useEffect(() => {
    timerIdRef.current =setTimeout(() => {} , 1000);
  });
  // ...
  userEffect(() => {
    if ( timerIdRef.current >= 0 ) {
      clearTimeout(timerIdRef.current);
    }
  });
  // ...
}