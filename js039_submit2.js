// js039_submit2.js

let btn = document.querySelector("#btn");
btn.onclick = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }

  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }

  //   document.log_f.action = "js039_submit2.html";
  // 이동해야 될 페이지가 여러개 있을 때
  // 페이지를 이동해주기 위해 사용한다.

  // 강제적으로 submit() 이벤트 발생시킨다.
  document.log_f.submit();
};
