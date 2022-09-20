// console.log("hello javascript");
// console.lg("test javascript");

// 대입연산자
let a = 3;
let b = 4;
let sum = 0;

sum = a + b;
console.log(`sum=${sum}`);

let data = 0;
data = data + a;
data += a; // data + a 에 비해 data += a 가 속도가 더 빠르다.
console.log(`data=${data}`);

// 연산자 우선순위
// 단항연산자 > 산술연산자 > 비교연산자 > 논리연산자 >조건연산자 > 대입연산자

let x = 5;
let y = 8;
let z = 10;
let result = x > y ? x++ : y++;
console.log(`result=${result}, x=${x}, y=${y}`); // result=8, x=5, y=9
