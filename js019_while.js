// js019_while.js

/*
while(조건식){
    실행문;
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("=================================");

let j = 1;
while (j <= 5) {
  // 외부에서 변수값을 안 정해주고 조건식에서 정할 경우 전역으로 설정이 된다.
  console.log(j);
  j++;
}

console.log("=================================");

/*
do {
    실행문;
}while(조건식);  중가로의 경우 끝인걸 바로 알 수 있어서 ;을 안 찍어줄 수 있지만
                소가로의 경우 ; 을 안 찍어주게 되면 오류가 발생한다.
*/

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

let input = "n";
do {
  console.log("고객님 주문하시겠습니까?(y/n)");
  input = prompt("입력");
} while (input == "y");
