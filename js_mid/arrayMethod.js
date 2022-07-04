// for Each

let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index)=> {
    console.log(`${index + 1}. ${name}`);
});


// find / findIndex
// find: 처음 조건 만족하는 경우.
let arr1 = [1, 2, 3, 4, 5];

const result = arr1.find((item)=>{
    return item%2 === 0;
});

console.log(result);


let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Sugi", age: 17},
];

const result2 = userList.find((user) =>{
    if (user.age<19){
        return true;
    }
    return false;
});

const result3 = userList.findIndex((user) =>{
    if (user.age<19){
        return true;
    }
    return false;
});

console.log(result2);
console.log(result3);

// filter : find는 1개, filter는 조건 충족하는 거 여러개
const result4 = arr1.filter((item)=>{
    return item%2 === 0;
});

console.log(result4);

// map : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let newUserList = userList.map((user, index)=>{
    return Object.assign({}, user, { // Object.assign: array 합치기
        id : index,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);


// join, split

let hello = ["안녕", "나는", "철수야"];

const result5 = hello.join(" ");
console.log(result5);

const result6 = result5.split(" ");
console.log(result6);


//Array.isArray(arrayName): 배열인지 확인


// arr.sort() 배열 재정렬, 배열 자체가 재정의

let arr5 = [1, 8, 4, 2];

arr5.sort((a, b) => {
    console.log(a, b);
    return a - b;
});

console.log(arr5);


// 배열의 모든 수 합치기

let arr6 = [1, 2, 3, 4, 5];

// for, for of, forEach

let result7 = 0;
arr6.forEach(num => {
    result7 += num;
});

console.log(result7);

// reduce로 누적 더하기

const result8 = arr6.reduce((prev, cur)=>{
    return prev + cur; 
}, 0); // 초기 prev 값 : 0

console.log(result8);


let userList1 = [
    {name:"Mike", age: 30},
    {name:"Jane", age: 27},
    {name:"Suji", age: 16},
    {name:"Eugine", age: 9},
];

let result9 = userList.reduce((prev, cur) =>{
    if(cur.age > 19){
        prev.push(cur);
    }
    return prev;
}, []);

console.log(result9);


