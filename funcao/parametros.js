function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,3,5,6))
console.log(soma(2,3,1,1,1,1,1,1,1,"teste"))