//  Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100
// faça um programa que receba os 5 numeros sorteados e mostre o maior numero sorteados

// Dados (entrada)

// 5
// 50
// 10
// 98
// 23

// saida:

// 98

const { gets , print } = require("./funcoesAuxilio") 
// Desta forma conseguimos chamar as funções que estão na pagina funcoesAuxilio.js

const quantidade = gets()
let maiorValor = 0

for (let i = 0; i < quantidade; i++) {
    const sorteado = gets()
    if (sorteado > maiorValor){
        maiorValor = sorteado
    }
}

print(maiorValor)