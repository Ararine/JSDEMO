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
