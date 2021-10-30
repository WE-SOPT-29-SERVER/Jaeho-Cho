// object 생성자 함수

const person = new Object(); //빈객체 생성
//프로퍼티 추가 키:값

person.name = "이름"; //점표기법 접근
person.part = "Sever";
person["grou"] = "YB"; //브라켓 표기법 접근

person.sayHello = function(){
    console.log( `안녕하세요 ${this.name}입니다.`);

};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("=====================");

//객체 리터럴(가장 일반적인 자바스크립트의 객체 생성방식)
const emptyObjectt = {}; //빈 객체생성
console.log(typeof emptyObject); //object

const animal = {
    aniamlType: "dog",
    animalName:"뽀삐",
    aniamlFriends: ["코코","초코","쿠키"],
    bark:function(){
        console.log(`${this.aniamlName}:멍멍`);

    },
    thisFreinds : function(){
        this.aniamlFriends.forEach(friend => {
            console.log(`${this.aniamlName}의친구 : ${friend}`);

        });

    },
};

console.log(animal);

animal.bark();
animal.thisFreinds();
