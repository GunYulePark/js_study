let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
];

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList);


// 금칙어 : 콜라
// indexOf() : 시작하는 자리 값 반환. 없으면 -1 반환
function hasCola(str){
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    }
}

hasCola("와 사이다가 짱이야");
hasCola("콜라가 최고");
hasCola("콜라");

// includes
// 문자가 있으면 true, 없으면 false 반환
function hasCola2(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    }
}
hasCola2("와 사이다가 짱이야");
hasCola2("콜라가 최고");
hasCola2("콜라");
