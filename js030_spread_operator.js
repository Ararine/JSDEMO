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
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10]; //깊은 복사 병합
console.log(arr11); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let arr12 = [arr8, arr9, arr10]; //얇은 복사 병합
console.log(arr12); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

arr10[4] = 15; //새로운 요소 추가
console.log(arr11); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr12); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, <1 empty item>, 15 ] ]

/////////////////////////////////////////////////
//[2] 함수에서의 Spread Operator

//1. Rest Parameter(나머지 매개변수)
function display(...params) {
  return params.reduce((sum, a) => {
    return sum + a;
  });
}
console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수 호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(arr13)); //NaN
console.log(Math.max(...arr13)); //50

//////////////////////////////////////
//[3] 객체에서 Spread Operator

//1. 객체복사
let prevState = { name: "고수", age: 30 };
let currentState = { ...prevState }; //복사
console.log(currentState); //{ name: '고수', age: 30 }

currentState = { ...prevState, loc: "서울" }; //추가
console.log(currentState); //{ name: '고수', age: 30, loc: '서울' }

//2. 객체 업데이트
let prevState2 = { name: "고수", age: 30 };
// prevState2.name = "여진구"; //name의 요소값 변경
// console.log(prevState2); //{ name: '여진구', age: 30 }

// prevState2 = { ...prevState2, name: "여진구" };
// // 같은 속성값이 존재하는데 그때 같은 속성값 끼리 업데이트가 일어난다.
// console.log(prevState2); //{ name: '여진구', age: 30 }

prevState2 = { name: "여진구", ...prevState2 }; //복사 순서를 바꿨을 때
console.log(prevState2); //{ name: '고수', age: 30 }
