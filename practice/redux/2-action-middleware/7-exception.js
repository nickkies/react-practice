const reportCrash = store => next => action => {
  try {
    return next(action);
  } catch (e) {
    // 서버로 예외 정보 전송
  }
}