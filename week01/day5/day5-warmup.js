// const isAdult = (age) => {
//     let age = 22
//     return true
// }
// isAdult함수를 만들어서 age라는 인자를 체크할거야, 그리고 그 값이 22라면 참, 15라면 거짓을 출력할거야

const isAdult = (age) => age >= 19
console.log(isAdult(22))
// {...}코드블록을 이용한 내부변수는 외부변수를 사용가능하지만 외부에선 내부변수 사용 불가능

{
    let message = "Hi"
    alert(message) // "HI"
}
 alert(message) // ReferenceError - {코드블록}을 제외한 다른곳에 할당된 변수message가 존재하지않음 

//  let hello = "hello"
//  alert(hello)

//  let hello = "helloooo"
//  alert(hello) //이경우에는 두 hello를 코드블록으로 감싼다면 "hello"출력후 "helloooo"가 출력되지만, 
              //해당 예시는 코드블록으로 감싸지지않아서 오류

