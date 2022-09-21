// js023_function.js
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions

// 함수(function) : 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자
//                  할 때 사용하는 문법이다.

/*
    함수 정의
    (1) 함수 선언문
    function 함수명(매개변수){
        실행문;
        return 값;
    }
    (2) 함수 표현식 -- 익명함수를 사용한다.
    let test = function(매개변수){
        실행문;
        return 값;
    }
*/

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? "윤년" : "평년";
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`); //2012년도는 윤년입니다.
}

//함수정의
// return 값은 하나만 쓸 수 있다.
//                 매개변수(parameter)
function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

//함수호출
year = 2013;
// 매개변수의 개수와 인수의 개수는 동일해야 한다.
//                      인수(arguement)
let result = isLeapYear(year);
console.log(result); //false
if (result) {
  console.log(`${year}은 윤년입니다.`);
} else {
  console.log(`${year}는 평년입니다.`);
}

//함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}

//함수 호출
console.log(add(2, 3)); //a=2, b=3,   5
console.log(add2(2, 3, 4)); //9
console.log(add()); //a=undefined, b=undefined ,  NaN
console.log(add(1)); //a=1, b=undefined,     NaN
console.log(add(1, "script")); //a=1, b=script,  1script
console.log(add(1, null)); //a=1, b=null,    1
console.log(add(1, 2, 3, 4, 5)); //a=1, b=2,    3
//Javascript 는 유연해서 앞에 인수만 처리하고 나머지는 버린다.
//C 나 JAVA 의 경우는 오류가 난다.
// console.log(add3()); //ReferenceError: add3 is not defined
add(5, 7); //a=5, b=7

// 함수에서 return이 없는 경우
function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello("홍길동"); //홍길동님 환영합니다.
console.log(hello("고수")); //고수님 환영합니다. ,     undefined

console.log("==================================");
// 함수 표현식

//ES5 - 익명함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); //[Function: sum]
console.log(sum(10, 20)); //30

let hap = function (a, b) {
  console.log(a + b);
};

console.log(hap); //[Function: hap]
console.log(hap(10, 30)); //undefined
hap(10, 30); //40 ,  '   '

//ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};

console.log(sub(3, 5)); //8
console.log(sub); //[Function: sub]

let call = (a, b) => {
  console.log(a + b);
};

console.log(call); //[Function: call]
console.log(call(3, 4)); //undefined
call(3, 4); //7

// 매개변수가 하나이고 return 이 있는 상황
let call2 = (a) => {
  return a;
};

console.log(call2); //[Function: call2]
console.log(call2(3)); //3

let call3 = (a) => a;

// 매개변수(parameter)가 하나이면 () 생략이 가능하다.
// return하는 문장만 실행문에 있으면 중괄호{} 와 return 을 생략할 수 있다.
console.log(call3); //[Function: call3]
console.log(call3(3)); //3

let call4 = () => console.log("로그인 해주세요.");

console.log(call4); //[Function: call4]
console.log(call4()); //undefined
call4(); //로그인 해주세요.
