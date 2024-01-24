/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos oss atributos nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor do seu IMC (imc = peso / (altura * altura))
instancie uma pessoa chamada josé que tenha 70kg de peso e 1.75 de altura e peça ao josé para dizer o valor de seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        const imc = this.peso / (this.altura * this.altura)

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

        return `O Imc de ${this.nome} é ${imc.toFixed(2)}`
    }
}

const jose = new Pessoa ('jose', 70, 1.75)
console.log(jose.calcularIMC())
const mateus = new Pessoa ('mateus', 110, 1.71)
console.log(mateus.calcularIMC())
