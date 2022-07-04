// await
// async함수 안에서만 쓴다.
// await 오른쪽엔 promise함수가 오고, 이 promise 함수가 처리될 때까지 기다린다.
function getName(name){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(name);
    }, 1000);
  });
}

async function showName(){
  const result = await getName("Mike");
  console.log(result);
}

console.log("시작");
showName();