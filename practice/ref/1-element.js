import React, { useRef, useEffect } from 'react';

// 돔 요소/ 컴포넌트에 접근하기
export default function App() {
  const inputRef = useRef();
  // 렌더링 결과가 반영된 이후에 적용!
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  )
}