let data = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

let make = function (arr, index) {
  let data0 = arr[index];
  let data1 = [...data0];
  // console.log(data1);
  let rm = data1.shift();
  // console.log(rm);
  let sum = data1.reduce((total, num) => {
    return total + num;
  });
  // console.log(sum);
  let ev = (sum / data1.length).toFixed(2);
  // console.log(ev);
  data0[4] = sum;
  // console.log(data0);
  data0[5] = ev;
  // console.log(data0);
  return data0;
};
let a = make(data, 0);

// let evL = function (arr) {
//   let evSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     return (evSum[evSum.length] = make(arr, i)[5]);
//   }
//   console.log(evSum);
//   return evSum;
// };
