//js026_string.js

// Spring
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

let data = "It`s alright";
console.log(data);

//length : 문자열의 길이
//JavaScript 에서는 .length JAVA 에서는 .length()
console.log(data.length);

/*
    특정 범위 데이터를 리턴해주는 3가지 메소드
                       미만
    1. .substing(start, end);
                      길이
    2. .substr(start, length);
    3. .slice(start, end);
*/

data = "Apple, Banana, Kiwi";
console.log(`substring: ${data.substring(7, 13)}`); //Banana , 7인덱스 부터 13 인덱스 미만
// 범위를 복사해서 붙여넣기, 잘라넣기가 아님
// substring() 은 음수값을 지원하지 않는다. 자바에서 사용하는 방식
console.log(`substring: ${data.substring(-12, -6)}`);
console.log(data);
console.log(`=======================================`);

// sutstr() 은 음수값을 지원한다. 데이터에서 사용하는 방식
console.log(`substr: ${data.substr(7, 6)}`); //Banana
console.log(`substr: ${data.substr(-12, 6)}`); //Banana
console.log(`=======================================`);

console.log(`slice: ${data.slice(7, 13)}`); //Banana
console.log(`slice: ${data.slice(-12, -6)}`); //Banana

//replace('찾을 문자열|RegExp', '바꿀 문자열')
// i : 대소문자 구분없음, g : 모든 문자열
// 복사, 수정, 붙여넣기, 원래 데이터는 그대로 보존된다.
// String 값은 불변이다.
console.log(`replace: ${data.replace(`Banana`, `Grape`)}`); //Apple, Grape, Kiwi
console.log(data); //Apple, Banana, Kiwi
console.log(`=======================================`);

// 정규 표현식
data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/, "red")); //Mr Blue has a red house and a blue car
// //g 는 소문자 전체
console.log(data.replace(/blue/g, "red")); //Mr Blue has a red house and a red car
// //i 는 대소문자 구분없이 첫번째
console.log(data.replace(/blue/i, "red")); //Mr red has a blue house and a blue car
// //ig 는 대소문자 구분없이 전체
console.log(data.replace(/blue/gi, "red")); //Mr red has a red house and a red car

data = "Hello World";
//.toUpperCase() : 값을 모두 대문자로 출력한다.
console.log(`toUpperCase() : ${data.toUpperCase()}`); //HELLO WORLD
//.toLowerCase() : 값을 모두 소문자로 출력한다.
console.log(`toLowerCase() : ${data.toLowerCase()}`); //hello world
console.log(`=======================================`);

// .concat(b) : 두 데이터 값을 붙여준다.
let data2 = "javascript";
console.log(`concat() : ${data.concat(data2)}`); //Hello Worldjavascript
// ' ' 을 주면 공백이 생긴다.
console.log(`concat() : ${data.concat(" ", data2)}`); //Hello World javascript
// '_' 을 주면 언더바가 생긴다.
console.log(`concat() : ${data.concat("_", data2)}`); //Hello World_javascript

//.charAt() : 해당 인덱스에 요소를 리턴
console.log(`charAt() : ${data.charAt(0)}`); //H
//.charCodeAt 하면 유니코드 값을 가져올 수 있다.
console.log(`charCodeAt() : ${data.charCodeAt(0)}`); //72(Unicode value)

data = "a, b, c, d, e";
//.split() : 문자열을 나누워 준다.
//.split(',') 은 배열 형태로 가져온다.
let arr = data.split("a, b,");
for (let i of arr) console.log(i); // c, d, e

data = "Mr Blue has a blue house and a blue car";
// .match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//           일치하는 문자열이 없으면 null로 리턴한다.
let res = data.match(/blue/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`); //blue,blue / object / true

data = "Mr Blue has a blue house and a blue car";
res = data.match(/red/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`); //null / object / false

//
//.search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//           일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g);
console.log(`search() : ${res}`); //14

res = data.search(/red/g);
console.log(`search() : ${res}`); //-1

data = "Mr Blue has a blue house and a blue car";
//.indexOf() : 지정된 값의 인덱스를 리턴
console.log(data.indexOf("M")); //0
console.log(data.indexOf("B")); //3

let position = data.indexOf("blue");
console.log(data.indexOf("blue", 2)); //14
console.log(data.indexOf("blue", position + 1)); //31

console.log(`=============================`);
data = "Mr Blue has a blue house and a blue car";
// let pos = -1;
// do {
//   pos = pos + 1;
//   pos = data.indexOf("blue", pos);
//   if (pos != -1) console.log(pos);
// } while (pos != -1);

data = "Mr Blue has a blue house and a blue car";
for (let pos = 0; pos < data.length; pos++) {
  pos = data.indexOf("blue", pos);
  if (pos == -1) break;
  console.log(pos);
}

//.repeat() : 반복된 값을 리턴
let text = "korea";
console.log(text.repeat(10)); //koreakoreakoreakoreakoreakoreakoreakoreakoreakorea

text = "*";
console.log(text.repeat(10)); //**********

let text2 = "  korea  ";
console.log(text2.length); // 9
//.trim().length : 양쪽의 불필요한 공백을 제거한다.
//                사이의 공백은 제거되지 않는다.
console.log(text2.trim().length); //5

text2 = "   korea   data   ";
console.log(text2.length); //18
console.log(text2.trim().length); //12
