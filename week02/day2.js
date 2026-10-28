const addItem = (fruit, tool) => {
    return [...fruit,tool]
}

const fruit = ['과일']
console.log(addItem(fruit,'스틱'))
console.log(fruit)