// CORRIGIR A FUNÇÃO adicionarElementosDoArray2NoArray1
// de forma que o resultado seja o ARRAY 1 + ARRAY 2

let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela', 'pantera negra'];
let lista = ["Macarrão", "Feijão", "Sabonete", "Arroz", "Escova", "Farinha"];

function converterMaisculas(array1, array2){

    // array[0] = array[0].toUpperCase();
    // array[1] = array[1].toUpperCase();
    // array[2] = array[2].toUpperCase();
    // array[3] = array[3].toUpperCase();
    // array[4] = array[4].toUpperCase();

    for (let contador = 0; contador < array1.length; contador++) {
        // A AÇÃO QUE SUA REPETIÇÃO
        array1[contador] = array1[contador].toUpperCase();
        array2[contador] = array2[contador].toUpperCase(); // TRANSFORMAR
    }

    return array2;
}

console.log(filmes);
console.log(converterMaisculas(lista, filmes));


// function adicionarElementosDoArray2NoArray1(array1, array2) {

//     console.log('entrada - ', array2);
//     converterMaisculas(array2);
//     console.log('maiusculas - ', array2);
    
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());

//     console.log('saida - ', array2);
    
//     return array1;

// }
// saida = adicionarElementosDoArray2NoArray1(filmes, designInterface);
// console.log(saida);

// // criar o arquivo da playlist
// let playlist = ["heavy metal", "pisadinha", "funk brega", "mpb", "pop", "sertanejo"]

// // POSICOES -> 0 .. 5 = tamanho 6
// console.log(playlist.length)

// // exemplo

// // for (inicio, condicao de parada, mudança = (incremento/decremento))

// // for (let i = playlist.length-1; i >= 0; i--) {
// //     console.log("posicao " + i + " estilo " + playlist[i]);
// // }

// let index = 0;
// while (index < playlist.length) {

//     console.log("posicao " + index + " estilo " + playlist[index]);
    
//     if (index%2 == 0) {
//         console.log(index);
//     }

//     index++;

// }

// // exemplo do while

// // do {
// //     console.log("posicao " + index + " estilo " + playlist[index]);
// //     index = 6;
// // } while (index < playlist.length);


// // condicao de parada - evitar LOOP INFINITO
// // condicao de parada - DELIMITAR O UNIVERSO

// // break - PARAR
// // break no switch case - para continuar o fluxo do programa e evitar para a proxima opcao