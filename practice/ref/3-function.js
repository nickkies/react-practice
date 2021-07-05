import React, { useCallback, useState } from 'react';

// useRef를 이용하지 않고 함수도 이용가능!
export default function App() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  // userCallback을 사용해야 input에 글씨 써짐
  // 새로 생성될때만 작동함
  const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

const INITIAL_TEXT = 'hello there';