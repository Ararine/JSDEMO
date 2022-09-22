// js021_for_in.js

//             0       1       2
let color = ["red", "green", "blue"];
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue

// JavaScript 배열과 다른 프로그램의 배열은 다르다.
// 배열 안에 있는 요소들을 element 라고 하고, index 가 주어진다.
// index 는 앞에 있는 변수가 관리한다.

console.log(color[3]); //undefined, 다른 프로그램의 경우 오류가 뜬다.

console.log(color.length); //3
// .length 는 요소의 개수를 return 해준다., .length()는 .length 와 다르다.
// .length 는 keyword, .length() 는 method

for (let index = 0; index <= 2; index++) {
  console.log(color[index]); //red,green,blue
}

// JavaScript 내에서는 배열에 요소가 추가된다.
color[3] = "black";
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]); //red, green, blue, black
}

// JAVA 에서는 element 를 가져온다. for(String element : city){}
// JavaScript 에서는 index 를 가져온다.
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  console.log(city[idx]); //서울, 부산, 대전
}

// 객체 리터널 : {property:value, property:value}
// {} 안에 있는 data 는 값만을 저장하는 객체이다.
// a,b,c 는 속성명, 1,2,3 은 데이터
let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }
console.log(obj.a); //1
console.log(obj.b); //2
console.log(obj.c); //3

for (let prop in obj) {
  // console.log(prop); //a,b,c
  // console.log(obj[prop]); //1,2,3
  // obj.prop 이 아니라 obj[prop] 인 이유는 obj 이라는 변수안에 prop 이라는 속성명이
  // 존재하지 않기 때문.
  console.log(`${prop}:${obj[prop]}`); //a:1, b:2, c:3
}
