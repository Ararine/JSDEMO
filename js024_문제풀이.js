// js024_문제풀이.js
/*
문제1
<프로그램 실행결과>
주어진 배열에서 3의 배수의 개수 => 6
주어진 배열에서 3의 배수의 합 => 108
*/

let arr = [1, 3, 5, 8, 9, 11, 15, 18, 19, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의
function process(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      console.log(arr[i]);
    }
  }
  return num;
}

//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의
function count(process) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      num++;
    }
  }
  return num;
}
console.log(`주어진 배열에서 3의 배수의 개수=> ${count(process)}`);
//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus(process) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      num += arr[i];
    }
  }
  return num;
}
console.log(`주어진 배열에서 3의 배수의 합=> ${arrPlus(process)}`);
/*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
for (let stringA of alpa) {
  process.stderr.write(`${stringA}`);
}

//alpa배열의 요소를  reverse한 후 리턴하는 함수 정의
function reverse(alpa) {
  return null;
}

//data배열을 출력하는  함수 정의
function display(data) {}
