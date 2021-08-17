// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.

function cumprimentarAlguem(valor) {
    console.log("Olá, " +valor + "!")
}
cumprimentarAlguem("Gabriel")

// escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function idadeEmDias(valor){
    console.log("Sua idade em dias é: " + valor*365)
}
idadeEmDias(19)

// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês

function salarioDoFuncionario(horasTrabalhas, recebePorHora){
    console.log("O sálario mensal do funcionario é: R$"+ horasTrabalhas* recebePorHora)
}
salarioDoFuncionario(700, 11)

// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function numeroIgualAmes(numero){
    switch(numero) {
        case 12:
            console.log("Você nasceu em Dezembro!")
            break
        case 11:
            console.log("Você nasceu em Novembro!")
            break
        case 10:
            console.log("Você nasceu em Outubro!")
            break
        case 9:
            console.log("Você nasceu em Setembro!")
        case 8:
            console.log("Você nasceu em Agosto!")
            break
        case 7:
            console.log("Você nasceu em Julho!")
            break
        case 6:
            console.log("Você nasceu em Junho!")
            break
        case 5:
            console.log("Você nasceu em Maio!")
            break
        case 4:
            console.log("Você nasceu em Abril!")
            break
        case 3:
            console.log("Você nasceu em março!")
            break
        case 2:
            console.log("Você nasceu em Fevereiro!")
            break
        case 1:
            console.log("Você nasceu em Janeiro!")
            break
        default:
            console.log("Mes invalido")
    }
}
numeroIgualAmes(1)

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(primeiro, segundo){
    return primeiro > segundo
}
console.log(maiorOuIgual(3,2))

// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.

function maiorOuIgualInclusivo (numero, minimo, maximo, inclusivo){
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }
    return numero > minimo && numero < maximo
}
console.log(maiorOuIgualInclusivo(5,5,10))

// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicarSemMultiplicacao(numero, multiplicador){
    if(numero >= 0 && multiplicador >= 0){
        let valor = 0
        for (let i = 0; i < multiplicador; i++) {
            valor += numero
        }
        console.log(valor)
    } else { console.log("Valor invalido")}
}

multiplicarSemMultiplicacao(4,4)

// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function criarArrayRepetido(numero, repeticao){
    let lista = []
    for(let i = 0; i < repeticao; i++) {
        lista[i] = numero
    }
    console.log(lista)
}
criarArrayRepetido("Gustavo",3)

// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro

function numeroDeString(numero){
    let string = ""
    for(let i = 0; i < numero; i++){
        string += "+"
    }
    console.log(string)
}
numeroDeString(5)

// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function novoArrayApartirDeArray(lista){
    return [lista[0], lista[lista.length - 1]]
}
let lista = [1,2,3,4,5,6,7,8,9,10]
console.log(novoArrayApartirDeArray(lista))

