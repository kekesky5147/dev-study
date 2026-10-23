let fruit = "Apple"
if (true) {
    let fruit = "Banana"
    console.log(fruit)
}
console.log(fruit)

//출력값은 Banana, Apple두가지인데 이 경우에는 내부의 콘솔로그는 내부변수fruit에 해당하는 Banana를 호출하고,
//마지막 콘솔로그는 {}로 감싸진 코드블록에 접근할수없기때문에 Apple이라는 값이 할당된 fruit를 호출한다
//내부코드블록의 변수를 price로 하고, 외부콘솔로그 호출변수값을 price로 하면 ReferenceError: price is not defined

let count = 10
function addOne() {
    let count = 10
    count = count + 1
    return count
}
console.log(addOne())
console.log(count)
//addOne()로그는 코드블록 내부의 연산식을 거쳐서 count(10) + 1이 적용되어서 11이 출력
//count 로그는 내부 코드블록 연산식에 접근할수없기때문에 let count = 10의 값인 10을 그대로 출력 

//makeGreeting(name, time) 화살표 함수: 바깥 변수 쓰지 말고, 받은 값으로 문자열을 return만 하기. 
//(함수 안 console.log 금지)
//time이 12보다 작으면 "좋은 아침이에요, ○○님", 아니면 "좋은 오후예요, ○○님"

let makeGreeting = (name, time) => {
    if (time<12) 
        {
            return `Good Morning ${name}`
        } else {
            return `Good Afternoon ${name} `
    }
}

console.log(makeGreeting("민지", 9));   
console.log(makeGreeting("준호", 15)); 

//getPassedAverage(list) 함수: 60점 이상인 학생만 골라서(filter) 점수만 뽑고(map) 평균을 return(reduce).
const student = [
  {name: "민지", score: 85 },
  { name: "준호", score: 52 },
  { name: "서연", score: 93 },
  { name: "도윤", score: 60 },
]

let over60 = student.filter(getScore=>getScore.score>=60)
console.log(over60)
let onlyScore = over60.map(scores=>scores.score)
console.log(onlyScore)
let totalScore = onlyScore.reduce((sum,current) => sum + current, 0 )
console.log(totalScore / onlyScore.length)

function makeCounter() {
let counter = 0
    
        return function() {
        counter = counter +1
        return counter
    }
}
const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA()); 
console.log(counterA()); 
console.log(counterA()); 

console.log(counterB()); 
//여기서 counter A와 B는 별개의 호출명령이므로, A가 3번 호출되어서 (count +1)에의해 3이되었지만 
// counterB는 첫 호출이기때문에 1을 호출한다

"오늘의 정리"
"코드블록 = { ... } 로 구성되며 코드블록 내부에서는 외부의 변수를 가져와서 호출할수있지만, 외부에서는 코드블록 내부에 간섭불가"
"중첩함수 = 함수 내부에 작은 함수를 더 넣어주는 방식, 변수를 외부에 노출하지 않고 안전하게 숨기면서(은닉), 상태를 지속적으로 유지하기 위해 사용"
"예시"
function A () {
    let number = 0 // 숫자를 0으로 지정 (외부 렉시컬)
    return function(){ //(내부 렉시컬 함수 내부의 함수를 넣어서 리턴값을 함수를 통해서 나온 값으로 리턴
        number = number+1 //number는 number값+1 방식으로 할당
        return number
    }
}
console.log(A())
//1. 중요한포인트는 지금처럼 console.log(A())를 바로 찍어버리면 가비지 콜렉터가 활성화되어서
//   단편적, 휘발성의 렉시컬환경이되어서 클로저가 발동되지않음
//2. const counter=A() 와같이 할당변수를 선언해야지만 렉시컬환경에서 클로저를 발동시켜 단편적이아닌 지속적인 코드가됌 