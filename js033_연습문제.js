// js033_연습문제.js

/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/

let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let a = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != undefined) {
    a[a.length] = arr[i];
  }
}
let b = a.reduce((total, num) => {
  return total + num;
});
console.log(`합계: ${b}`);
console.log(`평균: ${b / a.length}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00']]
  최고점: 71.67
*/

let data = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

//data[0]의 합계

let dataHo = data[0];
let dataLe = data[1];
let dataH = [...dataHo];
let dataL = [...dataLe];
let rmH = dataH.shift();
let rmL = dataL.shift();
let sumH = dataH.reduce((total, num) => {
  return total + num; //길동 점수 합
});
let sumL = dataL.reduce((total, num) => {
  return total + num; //영희 점수 합
});
let evH = (sumH / dataH.length).toFixed(2);
let evL = (sumL / dataL.length).toFixed(2);
dataHo[4] = sumH;
dataLe[4] = sumL;
dataHo[5] = evH;
dataLe[5] = evL;
let datA = [dataHo, dataLe];
console.log(datA);
console.log(`최고점: ${Math.max(evH, evL)}`);
