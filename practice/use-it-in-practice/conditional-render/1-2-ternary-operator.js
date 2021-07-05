function GreetingA({ isLogin, name, cash }) {
    return (
      <div>
        저희 사이트에 방문해 주셔서 감사합니다.
        {isLogin ? (
          <div>
            <p>{name}님 안녕하세요.</p>
            <p>현재 보유하신 금액은 {cash}원입니다.</p>
          </div>
        ) : null}
      </div>
    );
}

// 숫자의 경우 !!cash 불리언 타입으로!!
// name != null && ...
// 앵간하면 undifined 없이 빈값을 넣기!
function Greetingㅠ({ isLogin, isLogin2, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
      {!isLogin && isLogin2 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}