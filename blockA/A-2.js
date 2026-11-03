// 필수 ② a1-2.js: 인사말 만들기
// greet(name): 이름을 받아 "안녕하세요, ○○님"을 return
// 밖에서 console.log(greet("Kim"));
// 기대 출력: 안녕하세요, Kim님
// 참고할 예제: 예시 ① double + 1주차에 배운 템플릿 문자열(백틱 ` + ${})
// 힌트: 1단계 입구 name → 2단계 템플릿 문자열을 만들어 return


function greet(name) {
    return (`안녕하세요, ${name}님`)
}

console.log(greet("kim"))