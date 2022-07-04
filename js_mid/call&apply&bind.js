// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있다.
// call: 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.

const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

// showThisName(); 
// 원래 window.name 나와야.
showThisName.call(mike);

function update(birth, job){
    this.birth = birth;
    this.job = job;
}

update.call(mike, 961204, "programmer");

console.log(mike);


// apply는 매개변수들을 배열로 받는다.

update.apply(mike, [961204, "programmer"]);

console.log(mike);


const nums = [1, 4, 6, 2, 7];
// const minNum = Math.min(...nums);

// 2번 째 param으로 받는 array의 값을 순차적으로
const minNum = Math.min.apply(null, nums);
console.log(minNum);



// bind : 함수의 this값 영구히 수정 가능

const user = {
    name:"Mike",
    showName: function(){
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;
// this가 지워진다. 왜??
// 왜 바로 fn()하면 this.name이 발동이 안되지?
// 여기서 this가 fn 자체를 가리키게 되기 때문일 듯 하다.
// fn();

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();

