// Neste exercício,

// e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])        // 27
// somarArray([-5,100])             // 95

// você criará uma função somarArray() que aceita um array de números
// function somarArray(array) {
//     let teste = array;
//     return teste;
// }

// console.log(somarArray("[1,2,3]"));


// POSIÇÃO DE ARRAY = cada item entre vírgula é uma posição
// POSIÇÃO INICIAL DE TODO ARRAY VAI SER = 0 (zero)
// EXEMPLO -> QUANDO O TAMANHO DO ARRAY É 7: TEMOS AS POSIÇÕES DE [0 .. 6]
// QUERO ACESSAR A ÚLTIMA POSIÇÃO DO ARRAY -> [TAMANHO-1]

let lista = ["Macarrão", "Feijão", "Sabonete", "Arroz", "Escova", "Farinha"];
// console.log("LISTA antes PUSH "+ lista.length);
let lista2 = ["Macarrão"];
 
console.log("O método Join junta índices (MESMA COISA QUE POSIÇÃO) de um array, podendo colocar um caractere entre cada índice. Ex: " + lista.join());

console.log("O método Pop remove e retorna o último índice do array. Ex: " + lista.pop());

lista.push("Miojo", "Sal", "Pó de Café");

// console.log("LISTA POS PUSH "+ lista.length);

console.log("O método Push adiciona um novo valor ao array, no seu final. Ex: " + lista);
 
console.log("O método Shift remove e retorna o primeiro elemento do array. Ex: " + lista.shift())
console.log("1 - "+ lista)
console.log("O método Shift remove e retorna o primeiro elemento do array. Ex: " + lista.shift())
console.log("2 - "+ lista)

lista.unshift("Queijo", "Ovo")
console.log("O método Push adiciona um novo valor ao array, no seu começo. Ex: " + lista)

let novaLista = lista.reverse();
console.log("reverse LISTA AO CONTRÁRIO " + lista);

