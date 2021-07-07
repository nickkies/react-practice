import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendsList from '../component/FriendList';
import { useDispatch, useSelector } from 'react-redux';

function FriendsMain() {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if ( prevFriends !== friends ) {
        forceUpdate()
      }
      prevFriends = friends;
    });
    return () => unsubscribe;
  }, []);
  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendsList friends={friends} />
    </div>
  )
}

export default FriendsMain;