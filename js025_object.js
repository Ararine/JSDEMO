// js025_object.js

let data = 10;
let fData = Number(data); // 함수
let nObj = new Number(data); // 객체

console.log(`data=${typeof data}`); //number
console.log(`data=${typeof fData}`); // number
console.log(`data=${typeof nObj}`); // object
console.log(`data=${nObj instanceof Object}`); // true

// 원시 데이터는 값만 가지고 있고
// 객체 데이터는 값을 가지고 있으며 property, method가 제공된다.

console.log(typeof nObj.toString); // function
console.log(typeof nObj.toString()); // string

// javascript 내에서는 '.'을 붙이게 되면 객체화가 가능하다.
// toString() : number, Number -> string
console.log(typeof data.toString()); // string
console.log(typeof nObj.toString()); // string

console.log(data + fData); // number + number = 20
console.log(data + nObj); // number + object = 20

// Number -> number
// object -> primitive
// javascript 내에서는 object 를 계산했을 때 자동으로 number 로 변환시켜준다.
console.log(typeof nObj.valueOf()); // number
console.log(typeof new String("javascript")); // object
console.log(typeof new String("javascript").valueOf()); // string
console.log(parseInt(10.25)); // 10

// is, has 를 가진 객체명이 있다면 높은 확률로 논리값이 나온다.

// 내장객체 = 내부객체 = 기본객체
// 브라우저의 자바스크립트 엔진에 내장된 객체
// 필요한 경우 객체를 생성해 사용할 수 있다.
// String, Date, Array, Math, RegExp Object, ... etc

// Object 는 객체는 최상위 객체이다.

// Number
// 정수표현 : int, long, byte, short
// 실수표현 : float
// 두가지 다 표현 : double
// Number(), parseInt() 는 문자를 숫자로 바꿔줌

let val0 = "10.0";
console.log(val + val); //1010

console.log(Number(val0) + Number(val0)); //20
console.log(parseInt(val0) + parseInt(val0)); //20
console.log(parseFloat(val0) + parseFloat(val0)); //20

let val = "10.3";
console.log(val + val); //10.310.3

console.log(Number(val) + Number(val)); //20.6
console.log(parseInt(val) + parseInt(val)); //20
console.log(parseFloat(val) + parseFloat(val)); //20.6

let val1 = "A";
console.log(val1 + val1); //AA

console.log(Number(val1) + Number(val1)); //NaN
console.log(parseInt(val1) + parseInt(val1)); //NaN
console.log(parseFloat(val1) + parseFloat(val1)); //NaN

let val2 = "10A";
console.log(val2 + val2); //10A10A

console.log(Number(val2) + Number(val2)); //NaN
console.log(parseInt(val2) + parseInt(val2)); //20
console.log(parseFloat(val2) + parseFloat(val2)); //20

let val3 = "A10";
console.log(val3 + val3); //A10A10

console.log(Number(val3) + Number(val3)); //NaN
console.log(parseInt(val3) + parseInt(val3)); //NaN
console.log(parseFloat(val3) + parseFloat(val3)); //NaN

// 정적 메소드
// 인스턴스 메소드 new 로 지정된 객체에서만 사용가능하다.
