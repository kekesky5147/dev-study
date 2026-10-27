//첫 번째와 두 번째를 first, second로 꺼내서 출력 → red green
// let a = 1, b = 2;를 구조 분해 한 줄로 서로 바꾸기 → 2 1
const colors = ['red', 'green', 'blue'];
let [first,second, ,] = ['red', 'green', 'blue'];
console.log(first,second)

let a = 1, b = 2;
[a,b] = [b,a]
console.log(a,b)


//name, age를 꺼내서 출력 → 민지 25
// city를 location이라는 이름으로 꺼내기 → 서울
// 없는 속성 job을 기본값 '학생'으로 꺼내기 → 학생
// let {name,age} = user;
// console.log(name,age)

// let {name,age,city:location} = user
// console.log(location)

// let {name,age,city,job='학생'} = user;
// console.log(job)
const user = { name: '민지', age: 25, city: '서울' };
const introduce = ({name,age})=>{
    return `${name}(${age})`
}

console.log(introduce(user))

// mergeArrays(a, b) → 두 배열을 합친 새 배열 return
// mergeArrays([1, 2], [3, 4])
const mergeArrays = (a, b) => [...a, ...b]
console.log(mergeArrays([1,2],[3,4]))
