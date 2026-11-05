// grade(score)
// 점수를 받아 90 이상 "A", 80 이상 "B", 나머지 "C"를 return.

const grade = (score) => {
    if (score>=90) {
        return "A"
    }
    if (score>=80) {
        return "B"
    }
    return "C"
}

console.log(grade(95)); // A
console.log(grade(85)); // B
console.log(grade(60)); // C
console.log(grade(80)); // B