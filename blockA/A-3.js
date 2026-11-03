// 선택 ③ a1-3.js: 나쁜 예 고치기

// 아래 코드를 그대로 붙여 넣고, 매개변수 + return 버전으로 고치기:

// js
// let message = "커피 마시러 갈래?";
// function showLength() {
//   console.log(message.length);
// }
// showLength();
// 고친 함수 이름: getLength(text)
// 밖에서 console.log(getLength("커피 마시러 갈래?"));
// 기대 출력: 10
// 참고할 예제: 예시 ② badTax → goodTax 고친 모양 그대로
// 힌트: 1단계 바깥 let message 지우기 → 2단계 입구에 text → 3단계 return text.length;


function getLength(text) {
    return text.length
}

console.log(getLength("커피 마시러 갈래?"))