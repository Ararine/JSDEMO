let list = [];

for (let i = 1; i <= 45; i++) {
  list[list.length] = i;
}

let result = [];
for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * list.length);
  //   console.log(index);

  let num = list[index];

  //   console.log(num);
  list.splice(index, 1);

  //   console.log(num, list);
  result.push(num);
}
result.sort((a, b) => {
  return a - b;
});
console.log("결과", result);

// for (let i = 0; i < 6; i++) {
//   document.write(result[i]);
// }
let div = document.querySelectorAll(".wrap div");
let divA = [...div];
for (let i = 0; i < divA.length; i++) {
  divA[i].textContent = result[i];
}
