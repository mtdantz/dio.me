// 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade , calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

let nota1 = 4
let nota2 = 2
let nota3 = 3
let nota4 = 3

let media = (nota1 + nota2 + nota3 + nota4) / 4

// classificação:
// média menor que 5 - reprovado
// média entre 5 e 6 - recuperação
// média maior que 7 - aprovado

if (media < 5){
    console.log(`Aluno está reprovado com média ${media}`)
}else if(media > 6){
    console.log(`Aluno aprovado com média ${media}`)
}else{
    console.log(`Aluno em recuperação com média ${media}`)
}
