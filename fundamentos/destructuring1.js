const pessoa = {
    nome: "Alisson",
    idade: 18,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // nomeando diferente os atribuitos extraidos
console.log(n, i)

const {sobrenome:s = "Flores", bemHumorada = true} = pessoa
console.log(s, b)

const { endereco: {logradouro, numero = 290}} = pessoa
console.log(logradouro, numero)