import React from 'react';

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name} || {friend.age}세</li>
      ))}
    </ul>
  );
}

export default FriendsList;