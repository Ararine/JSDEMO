// js025_object1.js

let a = "javascript"; //string , 원시 데이터 , 값이 저장됨
let b = new String("javascript"); //object , 참조 데이터 , 주소가 저장됨

/*객체는 property. method 을 가지고 있다.
object. method(); // 객체에 구성도니 기능을 사용할 때
object. property; or object.property = value;
무언가에 '.' 을 붙여주면 객체화된다.

a.length
a.charAt

자바스크립트는 프로토타입의 객체이다.

기존에는 프로토타입으로만 사용이 가능
Test.prototype.display=function(){}

ES6 부터는 class 도 사용가능
class Test{
    let a;
    let b;

    function display(){}
}

()이 없으면 속성

속성의 표현
html - attribute (태그에서 사용)
javascript - property (함수에서 사용)

Number, String, Boolean 등에 ()을 붙이면 함수*/
