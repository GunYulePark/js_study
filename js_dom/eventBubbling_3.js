const box = document.getElementById("box");
const list = document.getElementById("list");
const color = document.getElementById("color");

// document.body.addEventListener('click', ()=>{
// console.log('1. body');
// })
box.addEventListener('click', ()=>{
  console.log('2. box');
})
list.addEventListener('click', ()=>{
  console.log('3. list');
})
color.addEventListener('click', ()=>{
  console.log('4. color');
})

// 4. cloror 클릭하면, 3, 2, 1 순차적으로 실행된다.
// 자식 요소에서 전파된 것은 상위 요소로 전파된다.
// 물 속 거품이 올라가는 모습.
// 버블링 예외 : focus, blur, mouseenter, mouseleave
// focusin, focusout, mouseover, mouseout으로 대체하면됨.

const square = document.getElementById("square");
const txt = document.getElementById("txt");

// document.body.addEventListener("focus", ()=>{
//   console.log("focus - 1. body");
// })
// box.addEventListener("focus", ()=>{
//   console.log("focus - 2. div");
// })
// txt.addEventListener("focus", ()=>{
//   console.log("focus - 3. input");
// })
// document.body.addEventListener("blur", ()=>{
//   console.log("blur - 1. body");
// })
// box.addEventListener("blur", ()=>{
//   console.log("blur - 2. div");
// })
// txt.addEventListener("blur", ()=>{
//   console.log("blur - 3. input");
// })

// event.stopPropagation(); 이렇게 하면 focusin, focusout에서도 bubbling 저지할 수 있다.
document.body.addEventListener("focusin", ()=>{
  console.log("focusin - 1. body");
})
box.addEventListener("focusin", ()=>{
  console.log("focusin - 2. div");
})
txt.addEventListener("focusin", ()=>{
  event.stopPropagation();
  console.log("focusin - 3. input");
})
document.body.addEventListener("focusout", ()=>{
  console.log("focusout - 1. body");
})
box.addEventListener("focusout", ()=>{
  console.log("focusout - 2. div");
})
txt.addEventListener("focusout", ()=>{
  event.stopPropagation();
  console.log("focusout - 3. input");
})