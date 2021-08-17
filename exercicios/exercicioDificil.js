function calcularNotas(objeto){
    let listaDeAlunosMedias = []
    Object.entries(objeto).forEach(([chave, valor]) => {
        let soma = 0
        let divisor = 0
        let total = 0
        console.log(`${chave} : ${valor}`)
        for(let item of valor){
            soma += item
            divisor++
        }
        total = soma / divisor
        listaDeAlunosMedias.push({
            nome: chave, 
            media: total
        })
    })
    console.log(listaDeAlunosMedias)
    let maiorValor = Math.max(...listaDeAlunosMedias.map(element => element.media ));
    let aluno = listaDeAlunosMedias.find(element => maiorValor === element.media);
    console.log(`${aluno.nome} tem a media ${aluno.media}`)
}

let alunos ={
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

calcularNotas(alunos)