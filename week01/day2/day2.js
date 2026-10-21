// for로 1부터 10까지 출력하기
for ( let i = 1; i<11 ; i++) console.log(i)


// 1부터 100까지의 합을 구해 출력 → 기대 결과 5050
let sum = 0
for ( let i = 1; i<=100 ; i++) {
    sum += i;}
    console.log(sum)

// 1~20 중 짝수만 출력 (%와 if 사용, 어제 배운 조건문 복습)
for ( let i = 1; i <=20; i++) {
    if(i%2 == 0) console.log(i) 
} 

// 함수 add(a, b) 만들기 → console.log(add(3, 4)) 결과 7
function addNumber(a,b) {
    console.log(a+b)
}
addNumber(3,4)

// 함수 isAdult(age): 19 이상이면 true, 아니면 false 반환 → isAdult(20) → true, isAdult(15) → false
function isAdult(age) {
    if (age>=19) {
        return true 
    } else { 
        return false
    }} ;

    console.log (isAdult(20))
    console.log (isAdult(15))

// 도전: 함수 sumTo(n): 1부터 n까지 합을 for로 구해서 반환 → sumTo(10) → 55
function sumTo(n) {

let sum = 0
for (let i = 1; i<=n; i++) {
    sum += i 
} 
return sum}

console.log(sumTo(10))