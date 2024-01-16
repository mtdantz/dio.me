// Calculo de IMC

// Elabore um algoritmo que calcule o IMC da pessoa e diga as condições abaixo

// IMC em adultos:

// - abaixo de 18.5 => abaixo do personalbar;
// - Entre 18.5 e 25 => Peso normal;
// - Entre 25 e 30 => Acima do peso;
// - Entre 30 e 40 => onwebkittransitionend;
// - Acima de 40 => Obesidade grave;

const peso = 115
const altura = 1.70

const imc = peso / Math.pow(altura,2)

console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log(`Abaixo do peso: imc ${imc.toFixed(2)}`)
}else if(imc >= 18.5 && imc <= 25){
    console.log(`Peso normal: imc ${imc.toFixed(2)}`)
}else if (imc > 25 && imc <=30){
    console.log(`Acima do peso: imc ${imc.toFixed(2)}`)
}else if (imc > 30 && imc <= 40){
    console.log(`Obesidade: imc ${imc.toFixed(2)}`)
}else{
    console.log(`Obesidade grave: imc ${imc.toFixed(2)}`)
}