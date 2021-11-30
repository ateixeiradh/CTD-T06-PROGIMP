// Exercício “Métodos de arrays”

// Exercício 01
// Crie um array de números pares, e utilizando a função .map() nesse array,
// crie um novo array com apenas números ímpares.
let pares = [2, 4, 6, 8, 10];
let impares = pares.map(function (numero) {
    return numero + 1;
});
console.log(impares);