const pList1 = document.querySelectorAll('p');
// return NodeList
// 한번 저장된 값 그대로 사용
const pList2 = document.getElementsByTagName('p');
// return HTMLCollection
// node의 변경사항이 실시간으로 반영됨.
console.log(pList1);
console.log(pList2);

const red = document.getElementById('red');
console.log(red.parentNode);
console.log(red.parentElement);


console.log(document.documentElement); 
// html
console.log(document.documentElement.parentNode);
//부모노드 반환
console.log(document.documentElement.parentElement);
 // 부모노드 중 element(html tag)인 것
// 그래서 return null

const ul = document.getElementById('color');
console.log(ul.childNodes);
// 모든 코드와 주석, 줄바꿈까지 포함
// 예외 : htmlcollections 처럼 실시간 반영됨.
console.log(ul.children); 
//childElement와 같은 의미

console.log(ul.firstChild);
console.log(ul.lastChild);
// 밑에 두개 걸 자주 쓴다.
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


const blue = document.getElementById("blue");
console.log(blue.previousSibling);
console.log(blue.nextSibling);

console.log(blue.previousElementSibling);
console.log(blue.nextElementSibling);

