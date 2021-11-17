// Repetir como um papagaio

// estrutura básica for (inicio, condicao, incremento ou decremento)
// for (let index = 0; index <= 4; index++) {
//     console.log(index + " QUERO BISCOITO");
// }

// Criando a tabuada

// numeros impares 1 a 100
var contador = 1;

// estrutura básica do WHILE
// while (condicaoDeParada) {
//     ação
//     incremento/decremento no contador
// }

/*
do primeiro executar
while (condição)
*/

// media da turma

// dados da turma - alunos e notas
// RESULTADO é minha média
// média GERAL que é a turma
// média do ALUNO

var dados = [];
var media = 0;
var mediaGeralResultado = 0;

// cria o nosso array de dados de alunos
dados[0] = [ "aluno 1", 7, 8, 7, 8 ]; // 0 nome do aluno
dados[1] = [ "aluno 2", 9, 9, 7, 7 ];
dados[2] = [ "aluno 3", 8, 8, 9, 10 ];
dados[3] = [ "aluno 4", 9, 9, 10, 6 ];

for (let inicio = 0; inicio < dados.length; inicio++) {
    // media Aluno
    var mediaAluno = ( dados[inicio][1] + dados[inicio][2] + dados[inicio][3] ) / (dados[inicio].length -1);

    media += mediaAluno; // acumula

    console.log(dados[inicio][0] +' - '+  mediaAluno);
}

mediaGeralResultado = media / dados.length;

console.log(mediaGeralResultado)

// ENTRADA - ARRAY, PARAMETRO, VALOR DECLARADO NO PROGRAMA
// SAIDA - SOMA, DIVISAO, MENSAGEM NA TELA
// O QUE: SOMA - NUMEROS INTEIROS
// CONDIÇÕES: NUMEROS INTEIROS < 10 ===