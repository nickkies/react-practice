import { useState } from "react";

// mount/unmout되기 때문에 state가 초기화 된다.
// 의도한 것이라면 ok,
// 의도되지 않은 것이라면 주석으로 한 방법이 낫다.
function Prarent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {user && <Child user={user} />}
    </div>
  );
}

function Child({ user }) {
  const [v, setV] = useState(0);
  /* if ( user ) {
    return null;
  } */
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  )
}