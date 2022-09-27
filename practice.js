let btn = document.getElementsByTagName("button")[0];
btn.onclick = process;
let chk = true;
function process() {
  let divNode = document.getElementsByTagName("div")[0];
  if (chk) {
    divNode.style.backgroundColor = "blue";
    chk = false;
  } else {
    divNode.style.backgroundColor = "red";
    chk = true;
  }
}

let div = document.getElementsByTagName("div")[0];
div.onmouseover = change1;

function change1() {
  if (chk) {
    div.style.backgroundColor = "green";
  } /*else {
    div.onmouseout - change2;
    function change2
  }*/
}

div.onmouseout = change2;

function change2() {
  if (chk) {
    div.style.backgroundColor = "yellow";
  }
}
