// 문제 1
let num = "7";
switch (num % 10 == 0) {
  case true:
    console.log(1);
    break;
  case false:
    console.log(0);
}

console.log("================================");
// 문제 2
let numm = 120;
let a = numm / 10;
let b = 0;
// if (a % 10 == 0) {
//   b = 0 ;
// } else {
//   b = 1;
// }
switch (a % 10) {
  case 0:
    b = 0;
  default:
    b = 1;
}
console.log(`a=${a}, b=${b}`);
let c = parseInt(a) + b;
console.log(`필요한 바구니의 수 : ${c}`);

console.log("================================");
// 문제 3
let cnum = "3";
let day = "";
switch (cnum % 10) {
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "월요일";
    break;
  case 7:
    day = "화요일";
    break;
  case 8:
    day = "수요일";
    break;
  case 9:
    day = "목요일";
    break;
  case 0:
    day = "금요일";
}
console.log(`차량번호의 끝자리가 ${cnum}인 차량은 ${day} 운행을 제한합니다.`);
console.log("================================");
// 문제 4
let year = "";
for (year = 2001; year <= 2012; year++) {
  if (year % 4 == 0 && year % 100 !== 0) {
    if (year % 400 !== 0) {
      console.log(year);
    }
  }
}

console.log("================================");
// 문제 5
let x = "";
let y = "";
for (x = 0; x <= 10; x++) {
  for (y = 0; y <= 10; y++) {
    if (2 * x + 3 * y == 10) {
      console.log(`x=${x}, y=${y}`);
    }
  }
}
