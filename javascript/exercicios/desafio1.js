
// Faça um programa que calcule o valor de uma viagem 

// tendo como variaveis:

// - o preço do combustível
// - o gasto médio de combustível do carro em km/l
// - a distancia em km da viagem

// imprima no console o valor que será gasto para realizar a viagem , em reais

const preçoLitroDoCombustivel = 3.95;
const kmPorLitro = 10;
let distanciaEmKm = 245

let gastoComViagemEmReais = (distanciaEmKm / kmPorLitro) * preçoLitroDoCombustivel


console.log(`O gasto com a viagem de ${distanciaEmKm} KM será de R$ ${gastoComViagemEmReais.toFixed(2)}`)
