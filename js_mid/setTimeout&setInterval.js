// setTimeout : 일정 시간이 지난 후 함수를 실행
// setInterval : 일정 시간 간격으로 함수를 실행
setTimeout(() => {console.log("첫 번째 메시지")}, 5000);



let num = 0;
function showTime(){
    console.log(`접속한지 ${num++}초가 지났다.`);
    if(num>2){
        clearInterval(tId);
    }
}

const tId = setInterval(showTime, 1000);
