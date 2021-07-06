import store from './common/store';
import { addFriend, removeFriend, editFriend } from './friend/state';
import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state';

export default function app() {
  store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' }));
  store.dispatch(addTimeline({ id: 2, desc: '리덕스 좋아' }));
  store.dispatch(increaseNextPage());
  store.dispatch(editTimeline({ id: 2, desc: '리덕스 너무 좋아' }));
  store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));
  
  store.dispatch(addFriend({ id: 1, desc: '아이유' }));
  store.dispatch(addFriend({ id: 2, desc: '손나은' }));
  store.dispatch(editFriend({ id: 2, desc: '수지' }));
  store.dispatch(removeFriend({ id: 1, desc: '아이유' }));
}
