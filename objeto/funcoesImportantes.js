const pessoa = {
    nome: "Alisson",
    idade: 18,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false, // Não aceita ser alterada
    value: '08/03/2003'
})

console.log(Object.entries(pessoa))