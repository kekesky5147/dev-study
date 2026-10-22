// ① 객체 기본 const me = { name: "Kim", job: "프론트엔드 공부 중", studyHours: 3 };

// 점 표기법으로 name, 대괄호 표기법으로 job 출력
// city 프로퍼티 추가, studyHours를 4로 변경, job 삭제(delete)
// "city" in me, "job" in me 출력 → 기대: true, false

const me = { name: "Kim", job: "프론트엔드 공부 중", studyHours: 3 }; 
console.log(me.name)
console.log(me["job"])

me.city="NYC"
me.studyHours = 4
delete me.job;
console.log(me)
console.log("city" in me)
console.log("job" in me)


// ② for…in me의 모든 키와 값을 키: 값 형태로 한 줄씩 출력 → 기대 예: name: Kim / studyHours: 4 / city: ...
for (let myself in me) {
    console.log(`${myself} : ${me[myself]}`)
}

// ③ 화살표 함수로 바꾸기 - 화요일에 만든 함수 2개를 화살표 함수로 다시 쓰기. 하나는 한 줄 버전((n) => n * 2), 하나는 중괄호 { }와 return이 있는 여러 줄 버전.
// 1번 화요일 함수
// function addNumber(a,b) {
//     console.log(a+b)
// }
// addNumber(3,4)

let addNumber = (a) => console.log(a * 2)
addNumber(3)

// 2번 화요일 함수
// function isAdult(age) {
//     if (age>=19) {
//         return true 
//     } else { 
//         return false
//     }} ;
let age = 22
let isAdult = (age>=19) ? 
() => console.log("성인입니다") : 
() => console.log("미성년자입니다")

isAdult()

// ④ reduce로 합계 - const prices = [3000, 4500, 12000]; → reduce로 합계 출력 → 기대: 19500
const prices = [3000, 4500, 12000];
let result = prices.reduce((sum, current) => sum + current, 0)

console.log(result)

// ⑤ 객체 배열 + reduce

// js
// const orders = [
//   { menu: "아메리카노", price: 4500, qty: 2 },
//   { menu: "라떼", price: 5000, qty: 1 },
//   { menu: "케이크", price: 6500, qty: 1 },
// // ];
// reduce로 총액 → 기대: 20500
const orders = [
  { menu: "아메리카노", price: 4500, qty: 2 },
  { menu: "라떼", price: 5000, qty: 1 },
  { menu: "케이크", price: 6500, qty: 1 },]
let totalPrice = orders.reduce((sum,current) => sum + ( current.price * current.qty ), 0);

console.log(totalPrice)

// (어제 복습) filter로 price가 5000 이상인 메뉴 이름만 → 기대: [ '라떼', '케이크' ] (map 같이 쓰기)
let filterPrice = orders.filter(item => item.price >=5000)
let filterMenu = filterPrice.map(item =>item.menu)

console.log (filterMenu)