console.log("hello");
//var : 재설정 가능 // 재할당 가능

//let: 재설정 불가능 // 재할당 가능

//const : 재설정 불가능 // 재할당 불가능 

var valueVar = "321"
var valueVar = "123"

console.log(valueVar);


function colorFunction() {
    if (true) {
        var color ="blue";
        console.log(color);
    }
    console.log(color);
}
console.log(color);


const arr = [1,2,3]

for (var i = 0; i<arr.length; i++){


}

const arr2 = [5,6,7]

for(var i= 0 ; i <arr2.length; i++){


}


// 자바스크립트 엔진은 선언을제일 먼저 해석한다. 


hoistFunction(){
    console.log(x);
    var x = 'var';
    console.log(x);
}

//자바 엔진이 해석하는 코드
//hoistfunction(){
//  var x = 'var';
//    console.log(x);
//    console.log(x);
//}


//자료형

const str = "Just do it";
const str2 = "just don't do it";

const myName = "조재호"

const strr='안녕하세요'+myName +'입니다.'
const backtickStr ='안녕하세요 ${myName}입니다.'

//연산자 
const numberVariable =1
const stringVariable ='1'

//값만 비교
// ==

console.log(numberVariable == stringVariable);


//값 & 타입 비교
// ===

console.log(numberVariable === stringVariable);


// 함수 선언식
function funcName2(param){
    //logic
}

//함수 표현식 
const fnncName = (param) => {

}