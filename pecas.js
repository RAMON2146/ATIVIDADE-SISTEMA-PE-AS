//Variáveis são um espaço na memoria pra guardar algum valor

let pesoPeca = 150

if(pesoPeca > 100) {
    console.log("Peso é maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso da peça insuficiente, não é possivel cadastrar.")
}

let numeroPecas = 8

if(numeroPecas < 10) {
    console.log ("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponivel na caixa")
}

let nomePeca = 'Disco de Freio'

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length <3) {
    console.log("Nome da peça é muito curto, não é possivel cadastrar")
} else {
    console.log("Nome da peça é adequado, podemos cadastrar")
}
