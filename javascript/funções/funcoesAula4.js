// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço do produto e a escolha da condição de pagamento.

// Condições:

// 1 - A vista no débito, recebe 10% de desconto;
// 2 - a vista no dinheiro ou pix , recebe 15% de desconto;
// 3 - parcelado 2x, preço normal do produto sem juros;
// 4 - parcelamento acima de 2x, preço normal da etiqueta com acrescimo de 10% do valor do produto ;

    const valorDoProduto = 100
    const pagamento = 1

function calcularDesconto(valor, desconto){
    return valor-(valor * desconto)
}
function calcularPercentual (percentual){
    return percentual/100
}
function calcularAcrescimo(valor, desconto){
    return valor+(valor * desconto)
}

function formaDePagamento(numero){
    if (numero == 1){
        console.log(`O valor a ser pago será de R$ ${calcularDesconto(valorDoProduto, calcularPercentual(10))}`)

    }else if (numero == 2){
        console.log(`O valor a ser pago será de R$ ${calcularDesconto(valorDoProduto, calcularPercentual(15))}`)

    }else if(numero == 3){
        console.log(valorDoProduto)

    }else if(numero == 4){
        console.log(`O valor a ser pago será de R$ ${calcularAcrescimo(valorDoProduto, calcularPercentual(10))}`)

    }else{
        console.log("Opção inválida")
    }
}
formaDePagamento(pagamento)
