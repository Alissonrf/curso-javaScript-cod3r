// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

function contarCaracteresNaString(caracter, palavra){
    let vezesDoCaracter = palavra.split(caracter)
    let total = 0
    for(let i = 0; i < vezesDoCaracter.length; i++){
        total++
    }
    return total -1
}

let a = "r"
let b = "robertinho rubro"
console.log(contarCaracteresNaString(a,b))

// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function filtrarArray(pesquisa, palavras){
    let arrayFiltrado = []

    for (let palavra of palavras) {
        if(palavra.includes(pesquisa)){
           arrayFiltrado.push(palavra)
        }
    }
    return arrayFiltrado
}

let palavra = "pro"
let listaDeProdutos = ["Iphone pro", "Macbook pro", "Samsung S8"]
console.log(filtrarArray(palavra,listaDeProdutos))

// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
// ou seja, sem as vogais.

function removerVogais(frase){
    return frase.replace(/(a|e|i|o|u)/gi, '');
}

let fraseComVogais = "Canada é lindo"
console.log(removerVogais(fraseComVogais))

// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme

function inverterChaveValor(objeto){
    let novoObjeto = {}
    Object.entries(objeto).forEach(e => {
        novoObjeto[e[1]] = e[0]
    })
    return novoObjeto
}

const objeto = {
    nome: "Alisson",
    categoria: "18",
    preco: 200
}

console.log(inverterChaveValor(objeto))

// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.

function retornarNumerosEspecificos(listaDeNumeros, digitos){
    let resultado = []
    for(let numero of listaDeNumeros){
        if(numero.toString().length == digitos){
            resultado.push(numero)
        }
    }
    return resultado
}

const valores = [890, 21, 711, 914]
let digito = 2
console.log(retornarNumerosEspecificos(valores, digito))

// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function acharMaiorNumeroArray(lista){
    let max = Math.max(...lista);
    return max
}

console.log(acharMaiorNumeroArray(valores))

// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

function calcularNotas(objeto){
    Object.entries(objeto).forEach(([chave, valor]) => {
        console.log(`${chave} : ${valor}`)
    })
    
}

let alunos ={
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

calcularNotas(alunos)