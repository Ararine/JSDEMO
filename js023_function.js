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
    (3) 즉시실행(익명함수)
      (function(param){
        console.log(`${param} run~~~`);
      })('test');
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
// 중괄호{} 를 생략할 경우 return 을 반드시 생략해줘야한다.
// 하지 않을 경우 SyntaxError: Unexpected token 'return' 메세지가 뜬다.
console.log(call3); //[Function: call3]
console.log(call3(3)); //3

let call4 = () => console.log("로그인 해주세요.");

console.log(call4); //[Function: call4]
console.log(call4()); //undefined
call4(); //로그인 해주세요.

// let call5 = () => return a;

// console.log(call5); //SyntaxError: Unexpected token 'return'

console.log("=================================");
// 다양한 함수 구조

// 중첩 함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3)); //13

// 콜백함수
//https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
//1. 다른 함수의 인수로 사용되는 함수
//                                    onclick 전부 소문자로 react 에서는 onClick
//2. 어떤 이벤트에 의해 호출되는 함수 : btn.onclick= function(){} - 객체에 함수를 등록했다.
//                                 버튼 클릭이 될 때
function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`==: ${callFunc}`); //==: function callback(a, b) { return a + b; }
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback)); //7

// 클로저(closure)
/* 1) 중첩함수는 outer(외부)함수가 끝나면 외부에서 outer(외부)함수의 지원을 사용할 수 없다.
   2) 클로저는 outer(외부) 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명
      주기가 종료한 외부함수의 변수를 참조할 수 있다. 이러한 중첩함수가 클로저(closure)이다.
   3) 클로저는 변수가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고
      특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.
*/
function outerFun() {
  let sum = 50;
  innerFun();
  function innerFun(a) {
    return sum + a;
  }
  return innerFun;
}

console.log(outerFun()); //[Function: innerFun]

let outerCall = outerFun();
console.log(outerCall); //[Function: innerFun]
console.log(outerCall()); //NaN
console.log(outerCall(3)); //53
console.log(outerCall(4)); //54

// 재귀함수
function testA() {
  console.log("testA before");
  testB();
  console.log("testA after");
}

function testB() {
  console.log("testB before");
  testC();
  console.log("testB after");
}

function testC() {
  console.log("testC");
}

testA();

console.log("========================================");
// 함수 파라미터
function display(a, b) {
  console.log(`a=${a} b=${b}`);
}

display(1, 2); //a=1 b=2
display(1); //a=1 b=undefined
display(1, 2, 3, 4, 5); //a=1 b=2

//(1) 기본 파라미터(default parameter) : ES6-2015
function display2(a = 0, b = 0) {
  console.log(`a=${a} b=${b}`);
}

display2(1, 2); //a=1 b=2
display2(1); //a=1 b=0
display2(1, 2, 3, 4, 5); //a=1 b=2

//(2) 나머지 파라미터(Rest Parameter) : ES6-2015
//    파라미터 개수를 가변으로 사용할 수 있도록 제공해주는 연산자이다.
//    spread operdator(점 3개(...))를 맨 마지막 파라미터로 사용하면 된다.

//spread operator 를 단독으로 사용
//JAVA 에서도 사용이 된다.
function display3(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}

display3(1, 2); //[ 1, 2 ]
display3(); //[]
display3(1); //[ 1 ]
display3(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]

// spread operator 를 고정 파라미터와 같이 사용할 때는 맨 마지막 함수에서 사용해야 한다.
console.log("========================================");
function display4(num, ...args) {
  console.log(num);
  console.log(args);
}

display4(1, 2); //1, [ 2 ]
display4(); //undefined, []
display4(1); //1, []
display4(1, 2, 3, 4, 5); //1, [ 2, 3, 4, 5 ]

console.log("========================================");
// arguments 객체
// 함수 안에서만 기본으로 사용할 수 있는 자바스크립트 객체이다.
// 함수 런타임 시점에 자동으로 생성되는 개체이며, 함수 코드 및 파라미터는 무관하게 자동 생성된다.
// 함수 호출할 때 함수로 전달된 실제 인자들의 정보를 담고 있는 객체이다.
// 함수 선언에서 파라미터로 정의한 변수 개수보다 실제 함수 호출할 때 전달하는 인수의 개수가 다를
// 수 있는 자바스크립트의 특성을 고려해 만들어진 객체이다.
function display5() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    //.callee 현재 실행되는 함수
    console.log(arguments[i]);
    // console.log(arguments.length);
  }
}

// display5(1, 2);
// display5(3);
display5(4, 5, 6, 7, 9);
