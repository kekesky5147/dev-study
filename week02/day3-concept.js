//Promise = 카페 진동벨. 주문하면 벨을 먼저 받고, 다른 일을 하다가, 벨이 울리면 음료를 받는다.
//1. 음료주문 - 진동벨설정 - 자리착석 - 진동벨값 출력 - 결과값
console.log(`1.주문`)
const bell = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(`Americano`), 2000)
})


console.log(`2.자리착석`)

bell
    .then((drink) => {
    console.log(`3. 받은음료`, drink);
    })
    .catch((runOut) => {
        console.log(`4.음료가 다 떨어졌습니다 다른음료를 주문해주세요`,runOut);
    })

const getCoffee = async() => {
    console.log(`A.Order`)
    const getDrink = await bell
    console.log(`B.Received`,getDrink )
}
getCoffee()
