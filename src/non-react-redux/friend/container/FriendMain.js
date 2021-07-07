import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendsList from '../component/FriendList';
import { useDispatch, useSelector } from 'react-redux';

function FriendsMain() {
  const friends = useSelector(state => state.friend.friends);
  const dispatch = useDispatch();
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