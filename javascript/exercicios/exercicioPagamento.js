// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço do produto e a escolha da condição de pagamento.

// Condições:

// 1 - A vista no débito, recebe 10% de desconto;
// 2 - a vista no dinheiro ou pix , recebe 15% de desconto;
// 3 - parcelado 2x, preço normal do produto sem juros;
// 4 - parcelamento acima de 2x, preço normal da etiqueta com acrescimo de 10% do valor do produto ;

const valorDoProduto = 100
const formaDePagamento = 3

if (formaDePagamento == 1){
    console.log(`Para pagamento no débito, o valor fica R& ${valorDoProduto - (valorDoProduto * 0.10)}`)

}else if (formaDePagamento == 2){    
    console.log(`Para pagamento em dinheiro ou pix, o valor fica de R$ ${valorDoProduto - (valorDoProduto* 0.15)} `)

}else if(formaDePagamento == 3){     
    console.log(`Para parcelamento em 2 vezes, o valor fica de R$ ${valorDoProduto}`)

}else if(formaDePagamento == 4){
    console.log(`Para parcelamento acima de 2 vezes, o valor do produto fica de R$ ${valorDoProduto +(valorDoProduto * 0.10)}`)

}else{
    console.log("Opção inválida, escolha uma forma de pagamento válida")
}