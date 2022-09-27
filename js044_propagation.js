//js044_propagation.js

//부모에서 자식 이벤트 전파 : 캡쳐링 capturing
//자식에서 부모 이벤트 전파 : 버블링 bubbling

document.querySelector(".red").onclick = (e) => {
  alert("red");
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  console.log(e);
  e.stopPropagation();
  //   return false; /Dom 에서는 적용이 안됨 JQuery 에서는 가능
};

//상속 관계에 있는 관계에서 모든 요소에 이벤트를 넣게 되면 이벤트가 전파가
// 되는데 이것을 propagation 이라고 한다.

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //   e.preventDefault();
  return false;
};

/*
https://www.w3.org/TR/DOM-Level-3-Events/

[1] Event Propagtion(이벤트 전파)
① 캡쳐링(capturing phase) : 부모요소에서 Target 요소로 이벤트 전파
② 버블링(bubbling phase) : Target 요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
.stopPropagation()

[3] stopPropagation() 와 preventDefault() 비교
    stopPropagation() : 이벤트 전파 차단 return false(jQuery)
    preventDefault() : 디폴트 이벤트 차단 return false (javascript, jQuery)

*/
