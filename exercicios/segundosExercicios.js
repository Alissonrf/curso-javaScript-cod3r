// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
// cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

function copiarObjetos(objeto, valorPraRemover){
    let novoObjeto = {}
    Object.entries(objeto).forEach(e => {
        if(e[0] != valorPraRemover){
            novoObjeto[e[0]] = e[1]
        }
    })
    return novoObjeto
}

console.log(copiarObjetos({a:"Alisson", b:2, c:3}, "c"))

// Ou

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}

// Ou

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}
    
// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarApenasNumerosArray(array){
    let listaNumerica = 0
    for(let i = 0; i < array.length; i++){
        if(typeof lista[i] == "number"){
            listaNumerica += array[i]
        }
    }
    console.log(listaNumerica)
}

let lista = [1,2,3,"Alisson","aaa","1"]

somarApenasNumerosArray(lista)

// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

function calcularDespesas(itens){
    let total = 0
    for(let item of itens){
        total += item.preco
    }
    return total
}

const despesa1 = {
    nome: "Alisson",
    categoria: "18",
    preco: 200
}
const despesa2 = {
    nome: "Alisson",
    categoria: "18",
    preco: 300
}

let listaDeDespesas= [despesa1, despesa2]

console.log(calcularDespesas(listaDeDespesas))

// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

function calcularMediaIndeterminada(lista){
    let soma = 0
    let divisor = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
        divisor++
    }
    return soma / divisor
}

let listaParaCalcularMedia = [3,3,3,3,3,3,3]
console.log(calcularMediaIndeterminada(listaParaCalcularMedia))

// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

function calcularAreaDoTriangulo(base, altura){
    let area = ((base * altura) / 2)
    return area.toFixed(2)
}

console.log(calcularAreaDoTriangulo(7,3))

// Criar uma função que receba um array de números e retorne o menor número desse array.

function acharMenorNumeroArray(lista){
    let min = Math.min(...lista);
    return min
}

let listaParaAcharMenorNumero = [3,3,99,3910,2,2,3]
console.log(acharMenorNumeroArray(listaParaAcharMenorNumero))

// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function sortearNumero(numeroEscolhido){
    let min = 1
    let max = 10
    const sorteado = Math.floor(Math.random() * (max - min + 1) + min)
    if (sorteado == numeroEscolhido){
        console.log(`Parabéns! O número sorteado foi o ${sorteado}.`)
    } else{
        console.log(`Que pena! O número sorteado foi o ${sorteado}.`)
    }
}

sortearNumero(2)

// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavra(palavra){
    let palavras = palavra.split(" ")
    let numeroPalavras = 0
    for( let i = 0; i < palavras.length; i++){
        numeroPalavras++
    }
    return numeroPalavras
}

let a = "Node é bem divertido até"
console.log(contarPalavra(a))