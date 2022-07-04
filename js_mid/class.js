// 기존 방법) 생성자 함수를 활용해 만들기
const User = function(name, age){
    this.name = name;
    this.age = age;
    // this.showName = function(){
    //     console.log(this.name);
    // };
};

// 객체 안에 넣는 게 아닌, __proto__에 넣기 위해서
User.prototype.showName = function(){
    console.log(this.name);
};

const mike = new User("Mike", 30);
console.log(mike);

mike.showName();



// 새로운 방법) class를 활용해 만들기

class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){ // __proto__에 저장됨.
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);
tom.showName();



// extends로 상속
class Car {
    constructor(color){
        this.color = color;
        this.wheels = 5;
    }
    drive(){
        console.log("drive..");
    }
}

class Bmw extends Car{
    constructor(color){
        super(color); // 반드시 부모 class의 constructor 생성해야.
        // 원래 constructor()로 빈 객체 만들고 this로 이를 가리키게 된다.
        // 하지만, extend를 통해 만든 자식 calss는 빈 객체 만드는 것 생략하기 때문에
        // super 안 쓰면 error 발생한다.
        // 그리고 constructor와 super 안에 color라는 param 안 적어주면 "blue"라는 argu 전달 안된다.
        this.navigation = 1;
    }
    park(){
        console.log("park..");
    }
    drive(){
        super.drive(); // super.를 통해 부모 class 내용 overriding할 수 있다.
        console.log("drive like bmw.."); // method overriding
    }
}

const z4 = new Bmw("blue");
z4.drive();
z4.park();
console.log(z4);