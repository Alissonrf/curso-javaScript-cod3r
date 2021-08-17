function soBoaNoticia(nota){
    if (nota >= 7 && nota <=10){
        console.log("Aprovado com " + nota)
    } else if (nota < 7) {
        console.log("Reprovado com " + nota)
    } else{
        console.log("Nota invalida!")
    }
}

soBoaNoticia(10)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade... " +valor)
    } else {
        console.log("É falso... " + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)