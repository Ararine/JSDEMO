/*
[문제2]
[데이터]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 진여구
연락처: 010-***-2253
*/

let person1 = { name: "홍길동", phone: "010-1234-5678" };
let person2 = { name: "진여구", phone: "010-253-2253" };

// console.log(person1.name);
// console.log(person1.phone);
// let aN = person1.name; //data 이름
// let aP = person1.phone; // data 전화번호
// console.log(aP.indexOf("-", 4)); //3, 8
// let l1 = aP.indexOf("-");
// let l2 = aP.indexOf("-", l1 + 1);
// let a = aP.substring(l1 + 1, l2); //-,- 사이에 값 따기
// console.log(a);
// let b = "*";
// let c = b.repeat(a.length); //값을 개수로 변환시켜 개수에 맞는 * 출력
// console.log(c);
// let d = aP.replace(a, c); //그 값을 중간번호와 교체한 번호
// console.log(d);
// console.log(`이름: ${aN}\n연락처: ${d} `);

//출력결과를 참고하여 display()함수를 구현하세요
function display(customer) {
  let aN = customer.name; // data 이름
  let aP = customer.phone; // data 전화번호
  let lF = aP.indexOf("-"); // 범위 초기값
  let lL = aP.indexOf("-", lF + 1); // 범위 마지막값
  let mP = aP.substring(lF + 1, lL); // 중간 번호
  let sR = "*".repeat(mP.length); // 중간 번호 개수만큼의 *
  let cP = aP.replace(mP, sR); // 중간 번호 교체한 번호
  console.log(`이름: ${aN}\n연락처: ${cP}`);
}
display(person1);
display(person2);
