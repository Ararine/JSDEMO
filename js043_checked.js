let totalCar = document.getElementById("total");

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
// console.log(chbCnt); //NodeList

//NodeList 을 Array 로 변환
let myChb = [...chbCnt];

//checkbox 에 onclick 이벤트를 등록
myChb.map((element) => {
  //   console.log(this); //window
  element.onclick = carCount;
});

function carCount() {
  console.log(this.id);
  //this 는 현재 이벤트가 발생한 객체
  //-> element = checkbox 하나하나

  /* defaultValue 는 input 에 초기에 입력된 value 값을
  기억해 가져온다. */
  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
