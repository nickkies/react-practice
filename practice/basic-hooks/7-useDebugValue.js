import React, { useState, useDebugValue } from 'react';

// 개발자 도구에 정보 제공
export default function useChageAppState() {
  const [state, setState] = useState(STATE_START);
  const next = () => {
    setState(state === STATE_STOP ? STATE_START : state + 1);
  }
  useDebugValue(
    state === STATE_START
      ? 'start'
      : state === STATE_RUNNING
      ? 'running'
      : 'stop',
  );
  return [state, next];
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;