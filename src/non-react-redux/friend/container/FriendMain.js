import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend, setAgeLimit, setShowLimit } from '../state';
import FriendsList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

export default function FriendsMain() {
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector(state => {
    const { ageLimit, showLimit, friends } = state.friend;
    const friendsWithAgeLimit = friends.filter(friend => friend.age <= ageLimit);
    return [
      ageLimit, 
      showLimit, 
      friendsWithAgeLimit, 
      friendsWithAgeLimit.slice(0, showLimit),
    ];
  }, shallowEqual);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
    console.log(friend);
  }
  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect 
        onChange={v => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendsList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={v => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendsList friends={friendsWithAgeShowLimit} />
    </div>
  )
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, 40, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, MAX_SHOW_LIMIT];