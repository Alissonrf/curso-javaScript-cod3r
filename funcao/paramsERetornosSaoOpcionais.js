function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(100,2))
console.log(area(23,3))