// async : promise chainning보다 가독성 좋아진다
// promise를 return한다.
async function getName(){
  // return Promise.resolve("Tom");
  throw new Error("err.."); // 왜 이걸로 하면 
}

console.log(getName());

// ncaught (in promise) // Error: err.. 가 발생한다.ㅠㅠㅠ
getName()
// .then(name=>{
//   console.log(name);
// })
.catch(err => {
  console.log(err);
});

