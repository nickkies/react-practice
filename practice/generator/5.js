// 제네레이터 함수로 자연수의 집합을 표현
// 무한루프 x
function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}
const gen = naturalNumbers();
gen.next(); // {value: 1, done: false}