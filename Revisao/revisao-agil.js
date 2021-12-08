// CONTROLE DE FLUXO DA APLICAÇÃO
// IF ELSE ou OPERADOR TERNÁRIO
// IF else if ELSE
// IF

// SWITCH CASE

function oQueCriar(entrada) {
    let resposta;
    switch (entrada) {
        // SE você precisar fazer um SWITCH para DUAS opções válidas: USE uma estrutura IF/ELSE

        case 'Epico': // entrega maior quem contem estórias (user story)
            resposta = 'Estoria';
            break;
        case 'Estoria':
            resposta = 'Tarefa';
            break;
        case 'Tarefa': // atividade
            resposta = 'Dev: LOG SUAS HORAS TRABALHADAS';
            break;
        default:
            resposta = 'ENTRADA INVÁLIDA';
            break;
    }
    return resposta;
}

// console.log("Criei o Epico, e agora? Agora: " + oQueCriar('Epico'));
// console.log("Criei o Estoria, e agora? Agora: " + oQueCriar('Estoria'));
// console.log("Criei o Tarefa, e agora? Agora: " + oQueCriar('Tarefa'));
// console.log("Criei o Tarefa, e agora? Agora: " + oQueCriar('Aleatoria'));

function jaAcabou(dataFimDoBimestre) {
    let resposta;

    if (dataFimDoBimestre === "18/12/21") { // TESTAR INTERVALO - qual o intervalo
        resposta = true;
    } else {
        resposta = false;
    }

    return resposta;
}

// console.log("Valida data anterior ao dia do término - " + jaAcabou("07/12/21"));
// console.log("Valida data igual ao dia do término - " + jaAcabou("18/12/21"));

function retornarMensagem(resultadoData) {
    // ESTRUTURA BÁSICA DO OPERADOR TERNÁRIO: condição ? primeira expressão : segunda expressão
    // i > 0, data < '18/12'
    return resultadoData ? 'ACABOOOOOU!' : 'ainda temos a avaliação final :('
}

// const resultado = jaAcabou("07/12/21");
// console.log("const resultado = " + resultado);
// console.log(retornarMensagem(resultado));

// console.log("return funcao jaAcabou = " + jaAcabou("18/12/21"));
// console.log(retornarMensagem(jaAcabou("18/12/21")));

// console.log("Valida data anterior ao dia do término - " + jaAcabou("07/12/21"));
// console.log("Valida data igual ao dia do término - " + jaAcabou("18/12/21"));


// STRINGS E ARRAYS
let estiloMusical = ['MPB', 'Rock', 'Sertanejo', 'Pagode', 'Lofi', 'Classica']; // array de string

// let MPB = ['MPB', 1969, true]; // array de diferentes tipo de dados: informações de uma variável

// let usuario = ['Ana', 28, 'ateixeira@digitalhouse.com'];

// let notaConcurso = [86, 79, 56];

console.log("tamanho da lista de estilo musical = " + estiloMusical.length);
const tamanhoInicial = estiloMusical.length;

// join 
estiloMusical.push('Samba'); // acrescenta o parametro ao final do array
estiloMusical.pop(); // remove o parametro do final do array

// ESTRUTURAS DE REPETIÇÃO
// FOR
function mostrarEstilosMusicais01(entrada) {
    for (let i = 0; i < entrada.length; i++) { // contador (let i --> INÍCIO), condição de parada (limite), modificador (INCREMENTO/DECREMENTO)
        console.log("entrada[" + i + "] = " + entrada[i]); // dentro do for (estrutura de repetição) --> a ação está relacionada ao contador
        // não usar o return dentro do for porque SAI DA FUNÇÃO
    }
}

// WHILE
function mostrarEstilosMusicais02(entrada) {
    // definir inicio fora da estrutura
    let inicio = 0;
    // testa condição de parada
    while (inicio < entrada.length) { // ENQUANTO (condição = true) FAZ
        console.log("entrada[" + inicio + "] = " + entrada[inicio]);

        // ao final da estrutura: modificação (incremento/decremento)
        inicio++;
    }

}

// DO WHILE
function mostrarEstilosMusicais03(entrada) {
    // inicio fora da estrutura
    let inicio = 0;

    do {
        console.log("entrada[" + inicio + "] = " + entrada[inicio]); // executa antes PRIMEIRO FAZ A AÇÃO - DO
        inicio++; // faz a modificação (incremento/decremento) na ação
    } while (inicio < entrada.length); // ao final TESTA se a condição CONTINUA VERDADEIRA
    
}

console.log("for: ")
mostrarEstilosMusicais01(estiloMusical);

console.log("==================================== ")
console.log("while: ")
mostrarEstilosMusicais02(estiloMusical);

console.log("==================================== ")
console.log("do while: ")
mostrarEstilosMusicais03(estiloMusical);

// OBJETOS

// MÉTODOS AVANÇADOS
    // ARROW FUNCTIONS ->
    // CALLBACK -> entrypoint