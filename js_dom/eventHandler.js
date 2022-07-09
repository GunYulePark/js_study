
let buttonArea = document.getElementById('buttonArea');
let button2 = document.createElement('button');
button2.setAttribute('onclick', 'sayHello()');
button2.innerHTML = "click2";
buttonArea.appendChild(button2);
console.log(button2);


let scriptfunc = document.getElementById('scriptArea');
let scriptArea = document.createElement('script');
scriptfunc.innerHTML = "function sayHello(){alert('Hello');}";
scriptArea.appendChild(scriptfunc);

// html에 id 할당 된 버튼
const el3 = document.getElementById('btn3');
el3.onclick = sayHello; // 괄호 없어야. 그래야 함수의 return 값(현재는 undefined) 전달되지 않는다.

const el4 = document.getElementById('btn4');
// el4.addEventListener("click", sayHello);
el4.addEventListener("click", () => {
  alert("hi");
});

// DOMContentLoaded : 다 html 불러지고 나서 실행
document.addEventListener("DOMContentLoaded", ()=>{
  document.body.style.backgroundColor = "red";
});

// input창에서 가능한 event들
  const inputTxt1 = document.getElementById("txt1");
  inputTxt1.addEventListener("keyup", (event) =>{
    console.log(event.key);
  })
