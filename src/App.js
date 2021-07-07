import React from 'react';
import FriendMain from './react-redux/friend/container/FriendMain';
import TimelineMain from './react-redux/timeline/container/TimelineMain';
import { Provider } from 'react-redux';
import store from './react-redux/common/store';

export default function App() {
  return (
    <Provider store={store}>
      <div>
          <FriendMain />
          <TimelineMain />
      </div>
    </Provider>
  );
}