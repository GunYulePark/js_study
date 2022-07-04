// generator함수
// fn()만 반환하고
// a.next()하면 다음 yield 전 까지만 실행된다.
function* fn(){
  try{
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
  } catch (e){
    console.log(e);
  }
}

const a = fn();

console.log(a[Symbol.iterator]() === a);

console.log(a);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
// 다 안끝났으면 done : false
// 다 안끝났으면 done : true

// genterator는 iterable이자 iterator

// iterable
// Symbol.iterator 메서드가 있다.
// Symbol.iterator는 iterator를 반환해야 한다.

// iterator
// next 메서드를 가진다.
// next 메서드는 value와 done 속성을 가진 객체를 반환한다.
// 작업이 끝나면 done은 true가 된다.

const arr = [1, 2, 3];
// iterable
for(let num of arr){
  console.log(num);
}

const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// next()에 인수 전달 하기

function* func(){
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);

  return num1+num2;
}

const aa = func();
console.log(aa.next());
console.log(aa.next(2));
console.log(aa.next(3));
// 이런 식으로 외부로부터 값을 불러올 수 있다.

function* fnc(){
  let index = 0;
  while(true){
    yield index++;
  }
}

const b = fnc();
console.log(b.next());
console.log(b.next());
console.log(b.next());

function* gen1(){
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2(){
  yield "Hello,";
  yield gen1();
  yield "!";
}

console.log(...gen2());