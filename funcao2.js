// armazenando uma funcao em uma variável 
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando um funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,8))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

