const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("OK");
        reject(new Error("err..."));
    }, 1000);
});

console.log("시작");

pr.then((result)=>{
    console.log(result);
})
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("끝");
    });


// 실제 주문 예시
// 방법 1) callback함수 사용 > 구시대적
const f1 = (callback) => {
    setTimeout(function (){
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function (){
        console.log("2번 주문 완료");
        callback();
    }, 1000);
};

const f3 = (callback) => {
    setTimeout(function (){
        console.log("3번 주문 완료");
        callback();
    }, 1000);
};

// console.log('시작');
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log("끝");
//         });
//     });
// });

// 방법2) Promise 사용
const o1 = () => {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res("1번 주문 완료");
        }, 500);
    });
};

const o2 = (message) => {
    console.log(message);
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res("2번 주문 완료");
            // rej("2번 주문 실패");
        }, 1000);
    });
};

const o3 = (message) => {
    console.log(message);
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res("3번 주문 완료");
        }, 1500);
    });
};


// 프로미스 체이닝(Promises Chaining)
// setTimeout(() => {
//     console.log('시작'),
//     o1()
//     .then((res) => o2(res))
//     .then((res) => o3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(()=>{
//         console.log("끝");
//     })
// }, 4000);


// Promise.all
// 주문을 한번에 다 받는다.
//하나라도 누락(reject)되면 안된다.
// console.time("x");
// Promise.all([o1(), o2(), o3()]).then((res)=>{
//     console.log(res);
//     console.timeEnd("x"); // 시간 측정
// });

// Promise.race
// Promise.all과 사용방식은 같은데 작동 가장 빨리 되는 하나만 되고 끝남.
// Promise.race([o1(), o2(), o3()]).then((res)=>{
//     console.log(res);
// });



// async&await 문
// console.log("시작");
// async function order(){
//     try{
//         const result1 = await o1();
//         const result2 = await o2(result1);
//         const result3 = await o3(result2);
//         console.log(result3);    
//     }catch(e){
//         console.log(e);
//     }
//     console.log("종료");
// }
// order();

// async&await 문 + promise.all문
console.log("시작");
async function order(){
    try{
        const result = await Promise.all([o1(), o2(), o3()]);
        console.log(result);
    }catch(e){
        console.log(e);
    }
    console.log("종료");
}
order();