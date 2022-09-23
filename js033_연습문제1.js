// js033_연습문제1.js

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

// let data0 = data[0];
// let data1 = [...data0];
// console.log(data1);
// let data2 = data[1];
// let rm1 = data1.shift();
// let rm2 = data2.shift();
// let sum1 = data1.reduce((total, num) => {
//   return total + num;
// });
// let ev1 = (sum1 / data1.length).toFixed(2);
// data0[4] = sum1;
// data0[5] = ev1;
// console.log(data0);
let data = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

let make = function (arr, index) {
  let data0 = arr[index];
  let data1 = [...data0];
  // console.log(data1);
  let rm = data1.shift();
  // console.log(rm);
  let sum = data1.reduce((total, num) => {
    return total + num;
  });
  // console.log(sum);
  let ev = (sum / data1.length).toFixed(2);
  // console.log(ev);
  data0[4] = sum;
  // console.log(data0);
  data0[5] = Number(ev);
  // console.log(data0);
  return data0;
};
// console.log(make(data, 0));
// console.log(make(data, 1));

let answer = function (arr) {
  let index = 0;
  let result = [];
  for (index = 0; index < arr.length; index++) {
    result[result.length] = make(arr, index);
  }
  return result;
};
console.log(answer(data));

// let evL = function (arr) {
//   let evSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     return (evSum[evSum.length] = make(arr, i)[5]);
//   }
//   console.log(evSum);
//   return Number(evSum);
// };
// console.log(evL(data));
