const valores = [8.3, 2.5, 7.9, 9.4]
console.log(valores[0], valores[3])
console.log(valores[4]) // NAO GERA UM ERRO COMO NO JAVA

valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push('alisson', 2, 4.5)
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)