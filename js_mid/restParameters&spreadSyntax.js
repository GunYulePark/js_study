// Destructuring assignment
// 구조 분해 할당
// 배열이나 객체의 속성을 분해해서
// 그 값을 변수에 담을 수 있게하는 표현식


// restParameters

// 매번 전달 받는 인수의 개수가 다를 때,
// ...param으로 받는다. > 배열 형식으로 받게 됨.


// 나머지 매개변수
// 전달 받은 보든 수를 더해야 함.

function add(...numbers){
    // let result = 0;
    // numbers.forEach((num)=> (result += num));
    let result = numbers.reduce((prev, cur) => prev + cur);
    console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// 나머지 매개변수
// user 객체를 만들어 주는 생성자 함수를 만들 예정.
// restParam은 맨 마지막에 들어가야 한다.
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = this.skills
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Mike', 30, 'JS', 'React');

console.log(user1);
console.log(user2);



// spreadSyntax

// arr2를 arr1 앞에 합치기
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// });

arr1 = [...arr2, ...arr1];


console.log(arr1);


// user라는 객체에 나머지 정보들을 넣어야 할 때

let user = {name:"Mike"};
let info = {age:30};
let fe =["JS", "React"];
let lang = ["Koeran", "English"];

// user = Object.assign({}, user, info, {
//     skills: [],
// });

// fe.forEach(item => {
//     user.skills.push(item);
// });

// lang.forEach(item => {
//     user.skills.push(item);
// });

user = {
    ...user,
    ...info,
    skills : [
        ...fe,
        ...lang
    ]
}

console.log(user);
