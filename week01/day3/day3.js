const scores = [72, 95, 88, 45, 100, 63];
const users = [
  { name: "민지", age: 24, isPremium: true },
  { name: "준호", age: 31, isPremium: false },
  { name: "서연", age: 19, isPremium: true },
];

// for문으로 scores의 합계 구하기 (어제 복습)
let sum=0
for (let i = 0; i<scores.length; i++ ) {
    sum += scores[i] 
    }
    console.log(sum)

// scores.length로 개수, ①로 평균 구하기
console.log(scores.length)
console.log(sum / scores.length)

// map으로 모든 점수에 +5
// 매핑에서 오류가있엇음, .map(score) console.log(addScore+5) 라고 답변
let addScore = [72, 95, 88, 45, 100, 63].map(scores=>scores+5)
console.log(addScore)

// filter로 70점 이상만 
// Miss - filter를 붙이지않아서 오류가났음
let filterScore = scores.filter(scores=>scores>=70)
console.log(filterScore)

// find로 처음 나오는 90점 이상
// 초기답변 : let over90 = scores.find(overscore => overscore>=90 == 0);
let over90 = scores.find(overscore => overscore >= 90 )
console.log(over90)

//find로 200점 이상 찾기 → 결과가 뭔지 확인
let over200 = scores.find(wrongscore => wrongscore >=200)
console.log(over200)

// map으로 users에서 이름만 뽑기
let userName = users.map(studentName => studentName.name)
console.log(userName)

//filter로 isPremium이 true인 사람만 → 그 결과에 map으로 이름만
// let premiumUser = users.filter(whoIsPremium => whoIsPremium.isPremium)
// console.log(users.map(premiumUser))

let premiumUser = users.filter(whoIsPremium => whoIsPremium.isPremium)
let premiumName = premiumUser.map(user=>user.name)

console.log(premiumName)

