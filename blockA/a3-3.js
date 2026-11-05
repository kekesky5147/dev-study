// ormatPrice(price, isMember) (Caffy 유료 플랜 가격 표시라고 생각해요)
// 회원이면 1000원 할인된 가격, 아니면 원래 가격을 문장으로 return.

function formatPrice (price, isMember) {
    if (isMember===true) {
        return "가격:" + (price - 1000)+ "원"
    } 
    return `가격:${price}원`
}

console.log(formatPrice(10000, true));  // 가격: 9000원
console.log(formatPrice(10000, false)); // 가격: 10000원