// closure
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures

function makeCounter(){
    let num = 0; // 은닉화
    return function(){
        return num++;
    };
}

let counter = makeCounter();
// counter()를 통해 내부 함수인 function()으로 접근할 수 있다.
// counter은 makeCounter이 실행 될 때 생성된 function 함수의 인스턴스에 대한 참조다. 
// function의 인스턴스는 변수 num 이 있는 어휘적 환경에 대한 참조를 유지한다. 

console.log(counter());
console.log(counter());
console.log(counter());
