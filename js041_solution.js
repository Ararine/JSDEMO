let btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  let pNode = document.getElementsByTagName("p")[0];
  let date = new Date();
  let years = date.getFullYear();
  let months = date.getMonth() + 1;
  let datE = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  pNode.innerText = `${years}-${months}-${datE} ${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
};
