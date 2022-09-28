// js048_this.js

///////////////////////////////////////////////////////////
//1. 호출한 객체가 없는 경우에는 기본적으로 Window 객체이다.
console.log(this); //window

/////////////////////////////////////////////////////////////
//2. 객체 안에서 anonymous function 에서의 나타는 this 는 객체 자제를 의미한다.
//여기선 member
let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};

member.show(); //{name: '홍길동', show: ƒ} //객체

////////////////////////////////////////////////////////////////
//3. 객체 안에서 arrow function 에서의 this 는 window 를 의미한다.
let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

member2.show(); //window

//////////////////////////////////////////
//4. 함수에서의 this
function showThisName() {
  console.log(this);
}

showThisName(); //window

let showThisName2 = () => {
  console.log(this);
};

showThisName2(); //window

let hello = function () {
  console.log(this);
};

hello(); //window

let hello2 = () => {
  console.log(this);
};

hello2(); //window

//////////////////////////////////////////
//5. 이벤트에서 this

//익명함수
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log(this); //객체 자체
  console.log(this == btn); //true
});

//Arrow함수
let btn2 = document.querySelector("#btn");
btn2.addEventListener("click", () => {
  console.log(this); //window
  console.log(this == btn2); //false
});

///////////////////////////////////////////////
const hong = { name: "홍길동" };
const jung = { name: "정해인" };
///////////////////////////////////////////////
//call() : call 메서드는 모든 함수에서 사용할 수 있으며
//         this 값을 특정값으로 지정할 수 있다.

console.log("call()=======================");

//익명함수
showThisName.call(hong); //{name: '홍길동'}
showThisName.call(jung); //{name: '정해인'}

showThisName(); // window

//Arrow함수
showThisName2.call(hong); // window
showThisName2.call(jung); // window

///////////////////////////////////////
function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}

update(2019, "IT"); //window

//this 로 사용할 hong 객체와 update 함수의 매개변수에서 받을 인수를 넘긴다.
update.call(hong, 2000, "프로그래머"); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}

//this 로 사용할 jung 객체와 update 함수의 매개변수에서 받을 인수를 넘긴다.
update.call(jung, 2016, "디자이너"); //{name: '정해인', birthYear: 2016, job: '디자이너'}

///////////////////////////////////////
//apply
//1. apply 는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call 은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만
//   apply 은 매개변수를 배열로 받는다.

console.log("apply()=======================");

update.apply(hong, [2000, "프로그래머"]); //name: '홍길동', birthYear: 2000, job: '프로그래머'}

update.apply(jung, [2016, "디자이너"]); //{name: '정해인', birthYear: 2016, job: '디자이너'}

///////////////////////////////////////
//bind
//1. call과 사용방법은 같으나 실행을 해야한다.
//   연결 후 호출
console.log("bind()=======================");
let hongUpdate = update.bind(hong, 2000, "프로그래머"); // 연결
hongUpdate(); //호출 //{name: '홍길동', birthYear: 2000, job: '프로그래머'}

let jungUpdate = update.bind(jung, 2016, "디자이너");
jungUpdate(); //{name: '정해인', birthYear: 2016, job: '디자이너'}
