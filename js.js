function outerFun() {
  innerFun();
  function innerFun(a) {
    return a + 1;
  }
  return innerFun;
}

let outerCall = outerFun();
console.log(outerCall); //[Function: innerFun]
console.log(outerCall()); //NaN
console.log(outerCall(3)); //53
console.log(outerCall(4)); //54
