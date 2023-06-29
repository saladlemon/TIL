// 배열.map(함수를 담습니다.) // 새로운 값을 가공할 함수 또는 로직

// 배열의 요소만큼 map에 작성된 함수가 수행됩니다. 인자는 두개를 받습니다.

// 1. 현재 요소의 값, 2. 현재 배열의 크기

// example
const a = [1, 2, 3, 4, 5];

const unit = a.map((unit, idx) => {
  return unit - 1;
});
// unit: [0, 1, 2, 3, 4]
console.log(unit);
