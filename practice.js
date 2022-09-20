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
let apple = 123;
let i = '';
for (let i = 0, b = 0; b > apple; i+=10) {
    if(i + b < 130) break;
  }
console.log(`필요한 바구니의 수 : ${i}`);

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
let year = '';
for(year = 2001; year <= 2012; year++) {
    for(year % 4 == 0 && year % 100 !== 0) {
        
    }
}
console.log("================================");
// 문제 5
let x = '';
let y = '';
for(x = 0; 2 * x + 3 * y = 10; x++){
    for(y = 0; 2 * x + 3 * y = 10; y++){
        console.log(`x=${x}, y=${y}`)
    }
}