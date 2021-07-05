import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* 여러 요소가 들어있는 경우는 이름을 적어주고 */}
      <InputAndSave inputRef={inputRef} />
      {/* ref라는 이름으로 사용 하고 싶을 경우 */}
      <Button ref={inputRef, buttonRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}

function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={buttonRef}>저장</button>
    </div>
  );
}

const Button = React.forwardRef( ({ onClick }, ref) => {
  return (
    <div>
      <button onClick={onClick} ref={ref}>저장</button>
    </div>
  );
});