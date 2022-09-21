console.log("[문제1]");
// num 변수의 값이 10의 배수이면 1을 아니면 0을 리턴하는 프로그램을 구현하시오.

// let num = "7";
// switch (num % 10 == 0) {
//   case true:
//     console.log(1);
//     break;
//   case false:
//     console.log(0);
// }

let num = 8;
let bit = num % 10 == 0 ? 1 : 0;
console.log(bit);

console.log("================================");
console.log("[문제2]");
/* 
1. 사과를 담는데 필요한 바구니의 수를 구하는 코드이다.
2. 만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
   13개의 바구니가 필요하다.
*/

// let numm = 121;
// let a = parseInt(numm / 10);
// let b = 0;
// if (numm % 10 == 0) {
//   b = 0 ;
// } else {
//   b = 1;
// }
// switch (a % 10) {
//   case 0:
//     b = 0;
//   default:
//     b = 1;
// }
// let c = a + b;
// console.log(`필요한 바구니의 수 : ${c}`);

let numOfApple = 123; //사과의 수
let sizeOfBucket = 10; // 하나의 바구니에 담는 사과수
let numOfBucket; // 필요한 바구니 수

numOfBucket =
  numOfApple % sizeOfBucket == 0
    ? parseInt(numOfApple / sizeOfBucket)
    : parseInt(numOfApple / sizeOfBucket) + 1;
console.log(`필요한 바구니의 수 : ${numOfBucket}`);
console.log("================================");
console.log("[문제3]");
// switch~case 문을 이용해서 차량5부제 프로그램을 구현하시오.

let cnum = "3";
let day = "";
switch (cnum % 10) {
  // case 1:
  //   day = "월요일";
  //   break;
  // case 2:
  //   day = "화요일";
  //   break;
  // case 3:
  //   day = "수요일";
  //   break;
  // case 4:
  //   day = "목요일";
  //   break;
  // case 5:
  //   day = "금요일";
  //   break;
  // case 6:
  //   day = "월요일";
  //   break;
  // case 7:
  //   day = "화요일";
  //   break;
  // case 8:
  //   day = "수요일";
  //   break;
  // case 9:
  //   day = "목요일";
  //   break;
  // case 0:
  //   day = "금요일";
  case 1:
  case 6:
    day = "월요일";
    break;
  case 2:
  case 7:
    day = "화요일";
    break;
  case 3:
  case 8:
    day = "수요일";
    break;
  case 4:
  case 9:
    day = "목요일";
    break;
  case 5:
  case 0:
    day = "금요일";
    break;
}
console.log(`차량번호의 끝자리가 ${cnum}인 차량은 ${day} 운행을 제한합니다.`);
console.log("================================");
console.log("[문제4]");
/*
2001년부터 2012년사이에서 윤년을 구하시오.
윤년의 조건
1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
2) 년도를 400로 나눈 나머지가 0이다.
*/

// let year = "";
// for (year = 2001; year <= 2012; year++) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     console.log(year);
//   }
// }
// let year = 2012;
for (let year = 2001; year <= 2012; year++) {
  let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  let yearData = leapYearCheck ? "윤년" : "평년";
  if (leapYearCheck) {
    console.log(`${year}년도는 윤년입니다.`);
  }
}
console.log("================================");
console.log("[문제5]");
/*
1. 10=2x+3y의 해를 구하시오.
    x와 y의 범위 : 0<=x<=10, 0<=y<=10
*/
let x = "";
let y = "";
for (x = 0; x <= 10; x++) {
  for (y = 0; y <= 10; y++) {
    if (2 * x + 3 * y == 10) {
      // console.log(`x=${x}, y=${y}`);
      process.stderr.write(`x=${x}, y=${y}\n`);
    }
  }
}
