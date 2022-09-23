// js028_array.js

let scores = [100, 90, 100];
console.log(scores); // [ 100, 90, 100 ] / browser 상에서는 Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined /JAVA 에서는 오류 /C 에서는 임의의 값(쓰레기 값?)
console.log(scores.length); //3

// 일반적으로 배열은 같은 값만을 묶는다.
// 정수면 정수, 논리면 논리 등
// JavaScript 는 모든 값을 묶는다.
let person = ["John", "Doe", 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/*
John string
Doe string
26 number
true boolean
*/
console.log("=========================================");
let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}
/*
홍길동 string
[ 100, 90, 20 ] object
*/
console.log("=========================================");
// new 를 통한 배열 생성
let cars = new Array("Sasb", "Volvo", "BMW"); //cars=[]
console.log(cars); //[ 'Sasb', 'Volvo', 'BMW' ]
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}
/*
Sasb string
Volvo string
BMW string
*/
console.log("=========================================");
//배열에 요소 추가하기

let color = [];
console.log(color.length); // 0
color[0] = "red";
console.log(color.length); // 1
color.push("green");
console.log(color); //[ 'red', 'green' ]
console.log(color.length); // 2
color.push(759);
console.log(color); //[ 'red', 'green', 759 ]
console.log(color.length); //3
color[8] = "blue";
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ]
//browser : ['red', 'green', 759, empty × 5, 'blue']
console.log(color.length); //9
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}
/*
0 : red
1 : green
2 : 759
8 : blue
*/

console.log("=========================================");
// 3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //point length : 3
console.log(point); //[ <3 empty items> ]

// 2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape); //[ 10, 20 ]
for (let idx in shape) {
  console.log(`${idx}, ${shape[idx]}`);
}
/*
0, 10
1, 20
*/
shape[2] = 50; // 추가
console.log(shape[1]); // 검색
console.log(shape.length); // 개수 조회

/*
for()
for ~ in : index
for ~ of : element
*/

//forEach() : 배열 전용 메소드
//배열.forEach(function(element[, index]){수행할 문장}); [] : 생략가능
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
// let choice = "javascript";
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });

//배열명.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});

//.map 배열의 개수에 맞춰 리턴된다.
console.log(`res : ${res}`); //res : 8,18,32,50

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`); //sqt : 2,3,4,5

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}

//.reduce 배열 요소들을 하나로 리턴
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`); //sum : 54

//.filter 조건을 리턴
const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});

console.log(`per : ${per}`);
