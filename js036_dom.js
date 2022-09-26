//js036_dom.js

let pNode = document.getElementById("wrap");
console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`);
//1, P, null

let pAttr = pNode.attributes;
console.log(pAttr);
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]);
//id="wrap"
console.log(pAttr.id);
//id="wrap"
console.log(pAttr.length); //2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); //2, id, wrap

let pIdAttr = pNode.getAttribute("id");
console.log(pIdAttr); //wrap

let textNode = pNode.firstChild;
console.log(textNode); //"content"
console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); //3, #text, content

/////////////////////////////////////////
//innerText, innerHTML : value 의 값을 가지지 않은 요소의 컨텐츠를 가지고 온다.

let bodyNode = document.getElementsByTagName("body")[0];
console.log(bodyNode.innerText); //content

console.log(bodyNode.innerHTML);

////////////////////////////////////////
// value
// interface를 통해 값을 얻을 수 있는 것들만 value 의 값을 가진다.

let fname = document.querySelector("#fname");
console.log(fname.value); //홍길동
