
// Faça um programa que calcule o valor de uma viagem 

// tendo como variaveis:

// - Preço do etanol
// - Preço da gasolina
// - o tipo de combustivel do carro
// - o gasto médio de combustível do carro em km/l
// - a distancia em km da viagem

// imprima no console o valor que será gasto para realizar a viagem , em reais

const precoEtanol = 3.95
const precoGasolina = 4.99
let tipoDoCombustivel = 'dieSel'.toLowerCase()
const kmPorLitro = 10;
let distanciaEmKm = 100

if (tipoDoCombustivel.valueOf() === 'gasolina'){
    console.log(`O gasto com a viagem de ${distanciaEmKm} KM, abastecido com ${tipoDoCombustivel} é de R$ ${((distanciaEmKm/kmPorLitro)* precoGasolina).toFixed(2)}`)
}
else if(tipoDoCombustivel.valueOf() === 'etanol'){
    console.log(`O gasto com a viagem de ${distanciaEmKm} KM, abastecido com ${tipoDoCombustivel} é de R$ ${((distanciaEmKm/kmPorLitro)* precoEtanol).toFixed(2)}`)
}else{
    console.log(`${tipoDoCombustivel} não é um combustível válido`)
}
