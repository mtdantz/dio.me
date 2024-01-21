// Crie uma classe para representar carros.
// Os carros possuem marca, cor e gasto médio de combustível por KM rodado
// Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar o percusso


class Carro{
    marca;
    cor;
    kmPorLitro;

    constructor(marca,cor,km){
        this.marca = marca
        this.cor = cor
        this.kmPorLitro = km
    }

    valorGastoEmReais(distancia, preço){
        const gastoComViagemEmReais = (distancia / this.kmPorLitro) * preço
        return gastoComViagemEmReais
    }
}

const voyage = new Carro('wolks', 'branco', 8)
const kwid = new Carro('Renault', 'laranja', 15)
const Ka = new Carro ('Ford', 'preto', 12)

console.log(voyage.valorGastoEmReais(200, 3.99).toFixed(2))
console.log(kwid.valorGastoEmReais(200, 3.99).toFixed(2))
console.log(Ka.valorGastoEmReais(200, 3.99).toFixed(2))