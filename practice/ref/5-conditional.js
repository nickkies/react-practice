import React, { useRef, useState } from 'react';

// 조건부 속성으로 ref사용 시 오류 발생!! => 검사 필요
export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      {/* current 값 검사해야함 */}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}