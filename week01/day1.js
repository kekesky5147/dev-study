// 메뉴 및 가격 변수 선언
const menu = "Americano"
const price = 4500

// 수량 및 회원 여부 선언
let quantities = 1
let membership = true

// 총액 계산식
const totalPrice = price * quantities

// 멤버십일때 할인 여부
if (membership) {
    totalPrice * 0.9}

// 스탬프 조건

if (totalPrice >= 10000) {
    stamp="2 Stamp"
} else if (totalPrice >= 5000) {
    stamp="1 Stamp"
} else {
    stamp = "No stamp"
}

console.log(`Menu ${menu}`)
console.log(`Final Price ${totalPrice}`)
console.log(`Membership Stamp ${stamp}`)

console.log("Type of price", typeof price)
console.log("Type of Customer", typeof membership)