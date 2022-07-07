const blue = document.getElementById('blue');
console.log(blue.firstChild);
console.log(blue.firstElementChild);

const blueTextNode = blue.firstChild;
console.log(blueTextNode.nodeName);
console.log(blueTextNode.nodeType);
//참고) https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// nodeType이 3이란 건 textnode라는 뜻.
console.log(blueTextNode.nodeValue);

// 변경
console.log(blueTextNode.nodeValue = '파랑');
const ul = document.getElementById('color');
// value가 text가 아닐 경우에는 번거롭다.
console.log(ul.nodeType);
console.log(ul.nodeName);
console.log(ul.nodeValue);
console.log(ul.textContent);
// 이렇게 하면 markup 다 지워진다.
console.log(ul.textContent = 'xxxx');
console.log(ul.textContent = '<li>RED</li>');
// list로 안됨.
console.log(ul.innerHTML = '<li>RED</li>');
// 매번 써줘야 한다.


// 효율적인 수정 방법
// 방법1
const newLi = document.createElement('li');
console.log(newLi);

newLi.innerHTML = 'green';
console.log(newLi);
console.log(ul.appendChild(newLi));

// 방법2
const newLi2 = document.createElement('li');
const newText = document.createTextNode('pink');
console.log(newText);
newLi2.appendChild(newText);
console.log(ul.appendChild(newLi2));


// 원하는 위치로 넣으려면 insertBefore
  const newLi3 = document.createElement('li');
  const textNode3 = document.createTextNode('black');
  newLi3.appendChild(textNode3);

  // me) innerText로 element 얻는 방법
  // http://daplus.net/javascript-innertext%EB%A1%9C-%EC%9A%94%EC%86%8C%EB%A5%BC-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95/
  for (const li of document.querySelectorAll("li")) {
    if (li.textContent.includes("green")) {
      li.id = 'green';
    }
    if (li.textContent.includes("RED")) {
      li.id = 'red';
    }
    if (li.textContent.includes("pink")) {
      li.id = 'pink';
    }
  }

  const green = document.getElementById('green');
  console.log(ul.insertBefore(newLi3, green));

  // appendChild하면 red이 제일 뒤로 이동
  ul.appendChild(red);

// clone
  const newBlack = newLi3.cloneNode();
  ul.appendChild(newBlack);
  // 이러면 그냥 껍데기만 온다.
  const newBlack2 = newLi3.cloneNode(true);
  ul.appendChild(newBlack2);

// removeChild
  ul.removeChild(pink);
  // ul.removeChild(ul.firstElementChild);
  // ul.removeChild(ul.lastElementChild);
  