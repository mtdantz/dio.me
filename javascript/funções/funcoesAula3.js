function EscrevaMeuNome(nome){
    return `Meu nome é ${nome}`
}

function EscrevaMinhaIdade(idade){
    if (idade >= 18){
        console.log(EscrevaMeuNome("Mateus") + ` e sou maior de idade, tenho ${idade} anos`)
    }else{
        console.log(EscrevaMeuNome("Mateus") + ` e sou menor de idade, tenho ${idade} anos`)
    }
}

EscrevaMinhaIdade(34)