import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { actions } from '../state';
import FriendsList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { getAgeLimit, getFriendsWithAgeLimit, getFriendWithAgeShowLimit, getShowLimit } from '../state/selector';

export default function FriendsMain() {
  // const ...
  // const ...
  // 이런식으로 사용해도 됨
  // redux 값이 아니고 프롭으로 넘어오는 경우는 메모이제이션 x...
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector(
    state => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendWithAgeShowLimit(state),
    ], shallowEqual,)
    /* state => {
    const { ageLimit, showLimit, friends } = state.friend;
    const friendsWithAgeLimit = friends.filter(friend => friend.age <= ageLimit);
    return [
      ageLimit, 
      showLimit, 
      friendsWithAgeLimit, 
      friendsWithAgeLimit.slice(0, showLimit),
    ];
  }, shallowEqual); */
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect 
        onChange={v => dispatch(actions.setValue('ageLimit', v))}
        // onChange={v => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendsList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={v => dispatch(actions.setValue('showLimit', v))}
        // onChange={v => dispatch(setShowLimit(v))}
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