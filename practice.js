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
