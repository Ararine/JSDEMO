// js034_Date.js

let date = new Date();
console.log(date); //2022-09-26T01:09:52.743Z -node.js
//Mon Sep 26 2022 10:16:40 GMT+0900 (한국 표준시) -웹브라우저
// 두 가지 표기 방법이 다름

//협정 세계시(UTC, Coordinated Universal Time)

console.log(date.getFullYear()); //년도
console.log(date.getMonth() + 1); //월
console.log(date.getDate()); //일
console.log(date.getDay()); //요일 0일요일 ~ 6토요일
