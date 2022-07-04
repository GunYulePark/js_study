// Symbol: 유일성 보장
// property key : 심볼형
// 같은 이름을 할당해도 다르게 인식
// 다른 사람이 만들어 놓은 걸 덮어쓸 염려 없다.
// 내가 추가한 것이 기존에 있는 property와 안겹치게 하려고

// Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음.

// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

user.showName = function(){
    console.log(this.name);
}

user.showName();

// 내가 작업
// const showName = function(){};
// object의 method 추가

const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
};

console.log(user);

// Symbol형은 접근할 때 []로 한다.
user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
};


