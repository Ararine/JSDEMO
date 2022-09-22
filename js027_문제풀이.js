// js027_문제풀이.js

/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

//[출력결과]를 참고하여 separator함수를 구현하세요.
function separator(data) {
  let a = data.replace("://", " "); // :// 제거
  let b = a.indexOf(" "); // 공백 인덱스
  let c = a.substring(0, b); // 앞의 값
  let d = a.substring(b + 1, a.length + 1); //뒤의 값
  console.log(`protocal: ${c}, domain: ${d}`);
}

separator("http://www.daum.net");
separator("ftp://ftp.microsoft.com");

console.log(`==========================================`);
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

//출력결과를 참고하여 display()함수를 구현하세요
function display(customer) {
  let aN = customer.name; // data 이름
  let aP = customer.phone; // data 전화번호
  let lF = aP.indexOf("-"); // 범위 초기값
  let lL = aP.indexOf("-", lF + 1); // 범위 마지막값
  let mP = aP.substring(lF + 1, lL); // 중간 번호
  let s = "*";
  let sR = s.repeat(mP.length); // 중간 번호 개수만큼의 *
  let cP = aP.replace(mP, sR); // 중간 번호 교체한 번호
  console.log(`이름: ${aN}\n연락처: ${cP}`);
}
display(person1);
display(person2);
