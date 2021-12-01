// Exercício “Métodos de arrays”

// Exercício 03
// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
let numeros = [5, 9, 30, 5, 7];
let concatenacao = numeros.reduce(function (acumulador, numero) {
    return acumulador + " - " + numero;
})
console.log(concatenacao);

// EXEMPLO SOMA
let soma = numeros.reduce(function (i, numero) {
    // incremento
    // i++ -> i = i +1
    return i + numero;
})

console.log(soma);