//js052_clock.js

let clockBox = document.querySelector("div.clock_box");
let timeBox = document.querySelector("div.clock_box div.time_box1");
let secondBox = document.querySelector("div.clock_box div.time_box2");
let dayBox = document.querySelector("div.clock_box div.day_box");

// console.log(timeBox);
// console.log(dayBox);
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
console.log(day);
switch (day) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
}
// console.log(date);

timeBox.innerText = `${hour}:${minute < 10 ? "0" + minute : minute}`;
secondBox.innerText = `${second}`;
dayBox.innerText = `${year} . ${month} . ${date} ${day}`;

clockBox.style.backgroundColor = "black";
clockBox.style.color = "white";
clockBox.style.width = "300px";
clockBox.style.height = "100px";
clockBox.style.borderRadius = "10px";
