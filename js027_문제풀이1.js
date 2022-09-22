/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

let daum = "http://www.daum.net";
let mic = "ftp://ftp.microsoft.com";
// let a = daum.replace("://", " ");
// console.log(a.indexOf(" "));
// console.log(a.length);
// console.log(a.substring(0, 4));
// console.log(a.substring(5, 18));
let separator = function (data) {
  let a = data.replace("://", " "); // :// 제거
  let b = a.indexOf(" "); // 공백 인덱스
  let c = a.substring(0, b); // 앞의 값
  let d = a.substring(b + 1, a.length + 1); //뒤의 값
  console.log(`protocal: ${c}, domain: ${d}`);
};
separator(daum);
separator(mic);
