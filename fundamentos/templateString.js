nome = "Alisson"
concatenacao = "Olá " +nome + "!"
const template = `
    Olá
    ${nome}`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = t => t.toUpperCase()
console.log(` Eii... ${up("Cuidado")}`)