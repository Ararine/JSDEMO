// js034_dom.js
// window.onload = function () {
//   let hNode = document.getElementById("selector");
//   console.log(hNode);
// };

let hNode = document.getElementById("selector"); //직접적으로 호출 /id가 ()인 요소 호출
console.log(hNode, typeof hNode);

let hId = document.querySelector(`#selector`); //css처럼 호출 /id 호출
console.log(hId, typeof hId);

let hClass = document.querySelector(`.choice`); //css처럼 호출 /class 호출
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0)); //배열처럼 사용가능
console.log(pNode[0].innerText); //content 1/ 안의 요소를 보여줌

pNode[0].style.backgroundColor = "red";

//https://www.w3schools.com/js/js_htmldom_document.asp

//form 안에 있는 데이터
function process() {
  alert("다시 입력해주세요.");
  //                form name
  let fname = document.frm.fname;
  //                     input name

  console.log(fname);
  //<input type="text" name="fname" placeholder="이름입력" value="홍길동">
  console.log(fname.value); //입력한 값
  //asa
  console.log(fname.defaultValue); //저장된 값
  //홍길동

  //[object HTMLInputElement]
  document.write(fname);
  return false; //action event를 못 주도록 해줌
}
