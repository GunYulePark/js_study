let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1+4]: 5,
};

console.log(user);


// 어떤 게 key가 될지 모르는 객체 만들 때
function makeObj(key, val){
    return {
        [key] : val,
    };
}

const obj = makeObj("성별", "male");

console.log(obj);


// obj 복사

// 이건 user의 참조값만 user2가 가져온 것.
const user2 = user;
console.log(user2);

const user3 = Object.assign({}, user);

user.name = "Tom";
console.log(user.name);
console.log(user3.name);


// object method
const objectKeys = Object.keys(user);
const objectValues = Object.values(user);
const objectEntries = Object.entries(user);

console.log(objectKeys);
console.log(objectValues);
console.log(objectEntries);

let arr = [
    ['mon', '월'],
    ['tue', '화'],
];

const arrayToObject = Object.fromEntries(arr);

console.log(arrayToObject);



