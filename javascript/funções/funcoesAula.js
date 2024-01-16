
function calcularImc (peso,altura){ // função que calcula o IMC
    return peso / Math.pow(altura,2)
}

function condicoesImc (imc){ // função que aplica as condicionais
    if (imc < 18.5){
        return `Abaixo do peso - IMC: ${imc} `
    }else if (imc >= 18.5 && imc <25){
        return `Peso normal - IMC: ${imc} `
    }else if (imc >= 25 && imc < 30){
        return `Acima do peso - IMC: ${imc} `
    }else if (imc >=30 && imc < 40){
        return `Obeso - IMC: ${imc} `
    }else{
        return `Obesidade grave - IMC: ${imc}`
    }
}

function main () {     // Função principal conteno as variáveis
    const peso = 90
    const altura = 1.7
    const imc = calcularImc(peso,altura)
    console.log(condicoesImc(imc.toFixed(2)))
}

main()