function sorteio(numeros) {
    let array = []

    for (let i = 0; i < numeros; i++) {
        array.push(Math.floor(Math.random() * 100))
    }

    return array;
}

console.log(sorteio(5));