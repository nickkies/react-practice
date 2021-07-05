// 속성값 타입 정보입력
MyComponent.propTypes = {
  // ...
};

// 디버깅을 위해서 이름 꼭 작성하기
// 명명된 매개변수로 작성하는 것이 좋음
export default function MyComponent({ prop1, prop2 }) {
  // ...
}

// 컴포넌트가 생성 될 때마다 객체가 생성되므로 밖에서 정의하고 사용!!
// + 가독성
const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 2, name: 'city', width: 100, color: 'grey' }
];
const URL_PRODUCT_LIST = '/api/products';
function getTotalPrice({ price, total }) {
  // ...
}