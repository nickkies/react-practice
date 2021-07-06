// bad case
// 순수 함수로 작성해한다.
// 부수효과 함수 x
function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch ( action.type ) {
      // 입력이 같아도 출력이 달라진다.
      // random으로 데이터를 만들어서 넘겨주자
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1);
        draft.msg = `안녕히세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
        break;
      case INCREMENT:
        callApi({ url: 'sendActionLog', data: action});
        draft.value += 1;
        break;
      // ...
    }
  });
}