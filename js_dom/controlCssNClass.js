const box = document.getElementById("box");
// box.style.backgroundColor = 'red';
// box.style.color = '#fff';
// box.style.width = "100px";
// box.style.height = "100px";
// box.style['margin-left'] = '30px';

// console.log(box.style);

// box.className = 'bg-red';
box.className = 'bg-blue txt-pink';
// 이렇게 하면 모든 class를 다 적어줘야 한다.
// 그래서 잘 사용하지 않는다.

console.log(box.classList);
box.classList.add('txt-white');
box.classList.remove('txt-pink');
// 이미 같은 계열의 class가 있으면 add, remove 보단 replace가 낫다.
box.classList.replace('txt-white','txt-pink');
console.log(box.classList);

setInterval(()=> {
  box.classList.toggle('bg-blue');
},2000)

const color = document.getElementById("color");

color.onclick = function(e){
  const target = e.target;
  if(target.tagName !=="LI") return;
  target.classList.toggle("txt-pink");
};