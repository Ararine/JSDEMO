// js041_today.js

let btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  let pNode = document.getElementsByTagName("p");
  let date = new Date();
  let years = date.getFullYear();
  let months = date.getMonth() + 1;
  let datE = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  pNode =
    years +
    "-" +
    months +
    "-" +
    datE +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  console.log(pNode);
  return false;
};
