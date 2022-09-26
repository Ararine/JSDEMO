// js035_dom.js
// 직접적으로 접근하는 방법
let myNode = document.getElementById("p2");

// 간적접으로 접근하는 방법
//parentNode
let ptNode = myNode.parentNode;
console.log(ptNode);
// <div id="wrap">...</div>

console.log(`parentNode:${ptNode}`);
ptNode.style.color = "blue";
//parentNode:[object HTMLDivElement]

///////////////////////////
//prevSibling

let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`);
//prevNode:[object Text]

prevNode = prevNode.previousSibling;
console.log(`prevNode:${prevNode}`);
//prevNode:[object HTMLParagraphElement]

////////////////////////////////
//nextSibling

let nextNode = myNode.nextSibling;
console.log(`nextNode:${nextNode}`);
//nextNode:[object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);
//nextNode:[object HTMLParagraphElement], content3

/////////////////////////////////
//previousElementSibling

let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNolde: ${prevEleNode}, ${prevEleNode.innerText}`);
//prevEleNolde: [object HTMLParagraphElement], content1

////////////////////////////////
//nextElementSibling

let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`);
//nextEleNode: [object HTMLParagraphElement], content3

//////////////////////////////////
//childNodes

let divNode = document.getElementById("wrap");
console.log(`divNode:${divNode}`);
//divNode:[object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode: ${divChildesNode}`);
//divChildesNode: [object NodeList]
console.log(divChildesNode);
//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]

///////////////////////////////////
//children

let divChildren = divNode.children;
console.log(`divChildren: ${divChildren}`);
//divChildren: [object HTMLCollection]
console.log(divChildren);
//HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]

console.log(divChildren[0]);
//<p id="p1">content1</p>

console.log(divChildren.item(0));
//<p id="p1">content1</p>

console.log(divChildren.namedItem("p1"));
//<p id="p1">content1</p>

let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode); //#text

aNode = pNode.firstElementChild;
console.log(aNode);
//<img src="images/gosu.jpg" alt="영화배우 고수">

let aAttrNode = aNode.getAttribute("src");
console.log(aAttrNode);
//images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode);
