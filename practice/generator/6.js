// saga function
function* minsooo() {
  const myMsgList = [
    '안녕 나는 민수야',
    '만나서 반가워',
    '내일 영화 볼래?',
    '시간 되니?',
    '안된다고?',
    '왜안돼?',
  ];
  for ( const msg of myMsgList ) {
    console.log('수지: ', yield msg);
  }
}

// saga middleware
function suji() {
  const myMsgList = ['', '안녕 나는 수지야', '그래 반가워', '아니', '아니', '아니'];
  const gen = minsooo();
  for ( const msg of myMsgList ) {
    console.log('민수: ', gen.next(msg).value);
  }
}

suji();