const car = {
    wheels: 4,
    drive(){
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};
// car > bmw
bmw.__proto__ = car;
benz.__proto__ = car;

console.log(bmw.wheels);

const x5 = {
    color: "white",
    name: "x5",
};

// bmw > x5
x5.__proto__ = bmw;

let p; // properties
for(p in x5){
    if(x5.hasOwnProperty(p)){ // __proto 값으로 안들어있고, 그 자체로 들어 있으면.
        console.log('o', p);
    } else{
        console.log('x', p);
    }
};



// 생성자 함수

// const car1 = {
//     wheels: 4,
//     drive(){
//         console.log("drive..");
//     },
// };

const Bmw = function(color){
    this.color = color;
};

// prototype.[properties]로 넣어주자.
// 방법 1
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
    console.log("drive..");
};

Bmw.prototype ={
    constructor: Bmw, // 방법1처럼 properties하나씩 넣어주지 않으면, constructor 값 자체적으로 들어가지 않기 때문에 수동으로 넣어줘야 한다.
    wheels: 4,
    drive(){
        console.log("drive..");
    },
};

const x3 = new Bmw("red");
const z3 = new Bmw("blue");

// x3.__proto__ = car1;
// z3.__proto__ = car1;
console.log(x3);

// instanceof 
// z3가 Bmw의 instance인가?
console.log(z3 instanceof Bmw);

// z3에 constructor라는 속성 있다. Bmw인가?
console.log(z3.constructor === Bmw);


// closure 사용해서 값 못바꾸게 하기

const Benz = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    };
};

const x6 = new Benz("red");

x6.getColor();