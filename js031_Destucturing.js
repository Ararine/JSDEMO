// js031_Destucturing.js

// Destructuring (구조 분해 할당)
//  :structuring(구조화)된 배열 또는 객체를
//   , Destructuring(비구조화)하여 개별적으로 변수에 할당하는 개념이다.

//1. 배열 Destructuring
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); //a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); //c=5, d=10

let m, n;
[n, m] = [c, d];
console.log(`n=${n}, m=${m}`); //n=5, m=10

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //나머지값 받기
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3,4,5,6,7,8

[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //특정값 빼고 받기
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=3
console.log(`next=${next}`); //next=5,6,7,8

let u, t, w;
[u, t, w] = [1, 2]; //default 값 존재
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=undefined

[u, t, w = 3] = [1, 2]; //default 값 넣기
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=3

[u, t = 4, w = 5] = [1, 2]; //이미 넣은 값이 있을 때
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=5

//2. 객체 Destructuring (구조 분해 할당)

const customer = { fullname: "고수", job: "연기자" };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname: ${fullname}, job: ${job}`); //fullname: 고수, job: 연기자

let { fullname: fn, job: jb } = customer; //객체에서 값 복사
console.log(`fullname: ${fn}, job: ${jb}`); //fullname: 고수, job: 연기자

let { job: work, fullname: fname } = customer; //객체에서 받는 속성은 순서가 바뀌어도 된다.
console.log(`job: ${work}, fullname: ${fname}`); //job: 연기자, fullname: 고수

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`fullname: ${name}, job: ${jbn}, loc: ${loc}`); //fullname: 고수, job: 연기자, loc: 서울

// let { fullname: nam, job = "actor", loc = "부산" } = customer; //수정이 불가하다.
// console.log(`fullname: ${nam}, job: ${jbn}, loc: ${loc}`); //SyntaxError: Identifier 'job' has already been declared

// let { s, r } = { s: 1, r: 2 }; //이름과 변수명을 같게 한다면 안 적어줘도 된다.
// console.log(s, r); //1, 2

let s, r;
({ s, r } = { s: 1, r: 2 }); //객체에서 값 복사 2
console.log(`s=${s}, r=${r}`); //s=1, r=2

//////////////////////////////////////////////////////
//completed의 값이 true인 데이터만 검색해라.
let habits = [
  { id: 1, content: "수영", completed: false },
  { id: 2, content: "걷기", completed: true },
  { id: 3, content: "명상", completed: true },
  { id: 4, content: "독서", completed: false },
];
let listHabit = [];
for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    listHabit.push(habits[i]);
  }
}
console.log(listHabit);
/////////////
let completedHabit = habits.filter((element) => {
  return element.completed;
});
console.log(completedHabit);

////////////////////////////
//member 변수에서 데이터를 추출하여
//'고수 고객님은 서울에 거주합니다.' 라고 출력하세요.

let member = {
  hname: "고수",
  address: { zipCode: "526-143", city: "서울" },
};
// console.log(member.name); //member 에서 name
// console.log(member.address.city); //member 에서 address 에서 city
// console.log(`'${member.name}' 고객님은 ${member.address.city}에 거주합니다.`);

// let { hname, address } = member;
// let { city } = address;
// console.log(`${hname} 고객님은 ${city}에 거주합니다.`);

({
  hname,
  address: { city },
} = member);
console.log(`${hname} 고객님은 ${city}에 거주합니다.`);
