import React, { useRef } from 'react';
import Profile from './4-3-useImperativeHandle'

export default function App() {
  const profileRef = useRef();
  const onClick = () => {
    if ( profileRef.current ) {
      console.log('current name length', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}