// Funçao em JS é First-Class Object (Citizens)
// High-order function

// criar de forma literal
function fun1(){

}

// armazenar em uma variavel
const fun2 = function() { 

}

// Armazenar em um array
const array = [function(a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](2,3))

// passar função como parametro 
function run(fun){
    fun()
}

run(function() {console.log("Executando") })

// Um função pode retornar/conter uma função
function somar(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

somar(2,3)(4)