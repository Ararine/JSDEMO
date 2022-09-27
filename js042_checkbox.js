//js042_checkbox.js

//약관 동의

document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

//전체 선택
document.frm.allCheck.onclick = function () {
  //방법 1. 단일단위로 하기
  console.log(this.checked); //true , false
  //현재 이벤트가 발생된 객체 : this
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  //방법 2. 그룹단위로 하기
  let checkgroup = document.querySelectorAll(".checkgroup");
  //   console.log(checkgroup.length); //3

  // Arrow Function
  // Arrow Function 에서 this 는 상위객체 document.frm.allCheck 를 의미함
  /*
  checkgroup.forEach((element) => {
    // console.log(this);
    //<input type="checkbox" name="allCheck" id="allCheck">
    element.checked = this.checked;
  });
  */

  //Anonymous Function
  //Anonymous Function 에서 this 는 window 객체를 의미함

  let myThis = this; //document.frm.allCheck

  /*
  checkgroup.forEach(function (element) {
    // console.log(this); //window
    element.checked = myThis.checked;
  });
  */
  /////////////////////////////////////////////////////////
  //this 의 값은 위치에 따라 값이 달라지기 때문에 수시로 확인해봐야한다.
  //Array.from() : NodeList를 Array로 변경
  //   console.log(`${checkgroup}`); //[object NodeList]

  //   let myArray = Array.from(checkgroup);
  //   //   console.log(`${myArray}`);
  //   // [object HTMLInputElement],[object HTMLInputElement],[object HTMLInputElement]

  //   /*
  //   checkgroup.map(function (element) {
  //     console.log(this);
  //     //Uncaught TypeError: checkgroup.map is not a function
  //     //at document.frm.allCheck.onclick
  //     //checkgroup 이 NodeList 이기 때문
  //   });
  //   */

  //   myArray.map(function (element) {
  //     // console.log(this); //window
  //     element.checked = myThis.checked;
  //   });

  /////////////////////////////////////////////
  //ES6 Spread Operator : NodeList 을 Array 로 변경

  let iArray = [...checkgroup];
  iArray.map(function (element) {
    element.checked = myThis.checked;
  });
};
