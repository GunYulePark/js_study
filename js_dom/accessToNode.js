// 가져오기
const el = document.getElementById('first');
console.log(el);
// id는 html 문서에 유일하게 사용한다.
const pList = document.getElementsByTagName('p');
console.log(pList);

let p;
for(p of pList){
  p.style.fontSize = '30px';
}
  
for(p of pList){
  p.style.opacity = String(Math.random());
}

const classAsking1 = document.getElementsByClassName('asking');
console.log(classAsking1);

// getElementByName() 도 있다.



// css 문법으로 가져오기
  // class는 .으로
  const classAsking2 = document.querySelectorAll('.asking');
  console.log(classAsking2);

  //id는 #으로
  const el2 = document.querySelector('#first');
  console.log(el2);

// 특정 부분만 가져오기
const secondH3 = document.querySelector('h3:nth-of-type(2)');
secondH3.style.color = 'blue';

const evenPList = document.querySelectorAll('p:nth-of-type(2n)');
for(p of evenPList){
  p.style.backgroundColor = '#000';
  p.style.color = '#fff';
}

// 불러오는 데이터의 타입
// 배열 아님. NodeList로, 이건 iterable한 collection

console.log(pList.length);
