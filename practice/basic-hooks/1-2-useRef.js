import React, { useState, useRef, useEffect } from 'react';

// 중간에 값을 저장하는 용도로 ref 사용가능!!
export default function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}  
      >
        나이 변경
      </button>
    </div>
  );
}