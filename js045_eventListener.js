// js045_eventListener.js

//이벤트 순서 정하기

let btn = document.querySelector("button");

// btn.onclick = () => {
//   alert("click1");
// };

// btn.onclick = () => {
//   alert("click2");
// };

function click1() {
  alert("click1");
}

function click2() {
  alert("click2");
}

//btn.addEventListener('이벤트', 함수, 이벤트 전파)
//이벤트 전파 => true : capturing, false : bubbling
//                           버블링 false, 캡쳐링 true
btn.addEventListener("click", click1, false);
btn.addEventListener("click", click2, false);
