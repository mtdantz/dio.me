

const entrada = [5,50,10,98,23,56,99]
let i = 0

function gets(){
    const valor = entrada[i];
    i++;
    return valor;

}

function print(texto){
    console.log(texto)
}


module.exports = { gets, print }