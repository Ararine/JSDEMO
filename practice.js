data = "Mr Blue has a blue house and a blue car";

// for (let i = 0; i < data.length; i++) {
//   i = data.indexOf("blue", i);
//   if (i == -1) break;
//   console.log(i);
// }

let i = -1;
do {
  i++;
  i = data.indexOf("blue", i);
  console.log(i);
} while (i != -1);
