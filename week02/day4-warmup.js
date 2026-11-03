const wait = (ms) => {
    return new Promise((resolve) =>
    setTimeout(() => resolve(`완료!`),ms
    ))
}


wait(1500).then(() => console.log('1.5초 지남'));