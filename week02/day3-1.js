// 필수 ② 매개변수로 받아 return하는 함수로 감싸기
// wait(ms) 함수: ms 밀리초 뒤에 resolve되는 Promise를 return한다.

// wait(1500).then(() => console.log('1.5초 지남'));

// 기대 출력: (1.5초 뒤) 1.5초 지남
// 힌트: 1단계 
// const wait = (ms) => { → 2단계 return new Promise((resolve) => { setTimeout(resolve, ms); }); → 3단계 호출해서 then

const wait=(ms) => {
    return new Promise ((resolve) => {
    setTimeout(()=>resolve(`완료!`),ms)
});
}

wait(1500).then(() => console.log('1.5초 지남'));


