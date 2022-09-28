//[1] 6개의 난수를 구하고 중복 체크

let lotto = [];
for (let i = 0; i <= 5; i++) {
  //난수 구하기
  /* 0.0 이상 ~ 1.0 미만*/
  let ran = Math.random() * 45;
  ran = Math.floor(ran) + 1;
  // console.log(ran);
  lotto.push(ran);

  //중복 체크
  for (let j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}
// console.log(lotto);

//[2] 정렬
lotto.sort((a, b) => {
  return a - b;
});
// console.log(lotto);

//[3] 출력

let divList = document.querySelectorAll("div.wrap div");

// divList.forEach((element, idx) => {
//   element.innerText = lotto[idx];
// });

divList.map((element, idx) => {
  element.innerText = lotto[idx];
});
