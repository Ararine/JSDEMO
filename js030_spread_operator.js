// js030_spread_operator.js

////////////////////////////////////
//[1] 배열에서의 Spread Operator

//1. 배열 복수(Array Copy)
let arr1 = [1, 2, 3]; //배열은 힙이라 불리는 영역에 저장되어있다.
let arr2 = arr1; //얇은 복사 : 배열 주소를 가지고 와서 배열을 표현하는 방식의 복사

console.log(`arr1 : ${arr1}`); //arr1 : 1,2,3
console.log(`arr2 : ${arr2}`); //arr2 : 1,2,3

arr2.push(4); //얇은 복사에서 값을 추가하였을 때
console.log(`arr1 : ${arr1}`); //arr1 : 1,2,3,4
console.log(`arr2 : ${arr2}`); //arr2 : 1,2,3,4

//깊은 복사 : 값을 가져와서 새로운 배열 주소를 갖는 방식의 복사

let arr3 = [1, 2, 3];
let arr4 = [...arr3];

console.log(`arr3 : ${arr3}`); //arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); //arr4 : 1,2,3

arr4.push(4); //깊은 복사에서 값을 추가하였을 때
console.log(`arr3 : ${arr3}`); //arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); //arr4 : 1,2,3,4

// 얇은 복사 상태에서는 값이 변하면 복사 원본에도 영향이 간다.
// 깊은 복사 상태에서는 값이 변해도 복사 원본에는 영향이 없다.

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); //[10, 20,  1, 2, 3, 40, 50] / 깊은 복사가 중간에 일어난 경우

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); //[ 1, 5, 6, [ 7, 8 ] ] 깊은 복사가 2차원에서 일어난 경우

//2. 배열 병합(Array Concatenation)
