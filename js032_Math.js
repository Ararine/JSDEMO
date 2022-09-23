// js032_Math.js

//JavaScript 에서는 여러가지 인수를 넣을 수 있지만 JAVA 에서는 불가능하다.

//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림 - 자릿수 지정할 수 없음
console.log(Math.round(25.3533)); //25

//올림
console.log(Math.ceil(23.344)); //24

//버림
console.log(Math.floor(23.56)); //23

//난수(임의의 값) 0.0이상 ~ 1.0 미만
console.log(Math.random());

//특정수까지만 반올림하여 리턴
console.log((25.523).toFixed(2)); //25.52
console.log((25.526).toFixed(2)); //25.53
