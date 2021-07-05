import React, { useRef } from 'react';

export default function App() {
  // 초기값 입력!
  const boxListRef = useRef({});
  function onClick() {
    let maxRight = 0;
    let maxId = '';
    for ( const box of BOX_LIST ) {
      const ref = boxListRef.current[box.id];
      if ( ref ) {
        const rect = ref.getBoundingClientRect();
        if ( maxRight < rect.right ) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    }
    alert(`오른쪽 끝 요소는 ${maxId}입니다.`);
  }

  return (
     <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }}
      >
        {BOX_LIST.map(box => (
          <div
            key={box.id}
            /* 여기서!! */
            ref={ref => (boxListRef.current[box.id] = ref)}
            style={{
              flex: '0 0 auto',
              width: box.width,
              height: 100,
              backgroundColor: 'yellow',
              border: 'solid 1px red',
            }}
          >
            {`box_${box.id}`}
          </div>
        ))}
      </div>
      <button onClick={onClick}>오른쪽 끝 요소는?</button>
     </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 50 },
  { id: 4, width: 80 },
  { id: 5, width: 30 },
  { id: 6, width: 90 },
];