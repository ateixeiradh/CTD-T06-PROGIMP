// Loop de Pares
// O QUE É UM LOOP: LAÇO DE REPETIÇÃO

// Você deve criar uma função chamada loopDePares que receba um número como parâmetro 
// e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o (número da iteração somado com o número passado pelo parâmetro) seja par (% == 0),
// aparecerá no console: "O número x é par"

function loopDePares(numero) {
    // ESCOLHER UMA ESTRUTURA DE LAÇO DE REPETIÇÃO
    // O LOOP PRECISA MOSTRAR OS NÚMEROS DE 0 A 100

    // opções: WHILE, FOR, FOREACH, DO WHILE

    // DENTRO DO LOOP
    // MOSTRAR O NÚMERO - CONTADOR
    // CASO o (contador+numero) % == 0 
        // x = (contador+numero)
        // CASO TRUE - "O número x é par"
        // CASO FALSE - mostra o contador

}

loopDePares(5); // chamada da função para TESTAR o resultado

// CONTROLE DE FLUXO = IF, SWITCH CASE

// Lidando com dois arrays
// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como
// parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á

function arrayHandler(array1, array2) {
    // TESTAR se os tamanhos dos arrays são iguais
    // CASO true
        // FAZ AÇÃO DA FUNÇÃO

        // ESTRUTURA DE REPETIÇÃO QUE CONSIGA PASSAR POR TODO ARRAY
        // em cada posição, mostra na tela "Eu sou array1[contador] e eu sou array2[contador]"

    // CASO false
        // mostrar na tela que tamanho é diferente e não faz a ação da função
}

arrayHandler([1,2,3], ["o","l","á"]);

arrayHandler([1,2,3,4], ["o","l","á"]);