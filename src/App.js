import React from 'react';
import FriendMain from './non-react-redux/friend/container/FriendMain';
import TimelineMain from './non-react-redux/timeline/container/TimelineMain';

export default function App() {
  return (
    <div>
        <FriendMain />
        <TimelineMain />
    </div>
  );
}