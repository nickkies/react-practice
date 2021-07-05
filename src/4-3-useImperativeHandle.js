import React, { forwardRef, useState, useImperativeHandle } from 'react';

// 자식 컴포넌트사용... 썩 좋지는 않음...
/* export default function App() {
  const profileRef = useRef();
  const onClick = () => {
    if ( profileRef.current ) {
      console.log('current name length', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <ProFile ref={profileRef} />
      <button onClicl={onClick}>add age 5</button>
    </div>
  );
} */

function Profile(_, ref) {
  const [name, setName] = useState('nick');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  )
}

export default forwardRef(Profile);