// isAdult(age)
// 나이를 받아 19 이상이면 true, 아니면 false를 return.

function isAdult (age) {
    if (age>=19) {
        return true
    } else {
        return false
    }
}

console.log(isAdult(25)); // true
console.log(isAdult(15)); // false
console.log(isAdult(19)); // true