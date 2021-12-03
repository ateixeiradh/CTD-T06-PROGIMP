// questao 01
// 4 6 3

// function soma(a=1, b=3) {
//     return a+b;
// }

// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));


// // questao 02

// // operadores utilizados no Javascript
// // 1 concatenar uma string [+]
// // 2 comparar o conteúdo de uma variável e seu tipo [===]
// // 3 operador de negação [!]
// // and lógico [&&]
// // respectivamente: + === ! &&

// questao 03
let numeros= [10, 8, 7, 99, 0, 1, 6]
let saida = [99, 10, 8, 7, 6,  1, 0]


// let um = numeros.sort(function(a,b){ return a-b;});
// let dois = numeros.sort(function(a,b){ return a*b;});
// let tres = numeros.sort(function(a,b){ return b-a;});
// let quatro = numeros.sort(function(a,b){ return a,b;});
// let cinco = numeros.sort(function(a,b){ a-b;});


// console.log(um+'')
// console.log(dois+'')
// console.log(tres+'')
// console.log(quatro+'')
// console.log(cinco+'')

// // questao 04
// var z=0;
// console.log('fora ', z);

// for (var i=20; i<50; i+=10) {

//     // i = 20
//     // i < 50 (=40)
//     // i + 10 = i

//     console.log('comecei + ', i);

//     console.log('ANTES z - '+ z, 'i - '+ i);
//     // z = 0 + 20 = i
//     // 20 = 10+30
    
//     z += i;

//     console.log('z - '+ z, 'i - '+ i);

// }

// console.log('sai', z);

// // questao 05
// //O operador ++ incrementa 1,
// //o operador -- decrementa 1,
// //o operador % calcula o resto, -> operador de modulo, MOD, "resta quanto", resto da divisão
// //o operador + concatena ou soma

// // questao 06
// // Instanciar um objeto é a ação de criar um exemplar de uma classe para trabalhar com ele
// // explicitamente colocar o NEW -> new objeto
// // molde == objeto

// // questao 07
// // as 3 primeiras linhas temos ESTRUTURA DE ARRAY FORMADA POR STRINGS (o tipo de dado de cada posicao do array)
// // arrays de frutas CLASSIFICADAS por cor

// let frutasAmarelas=['melão','mamão','limão siciliano']
// let frutasVermelhas=['morango','cereja','maçã red']
// let frutasVerdes=['limão','kiwi','maçã verde']

// frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// // visao: identificar estrutura de callback: que é a passagem de uma funcao como parametro
// // metodo map vai passar por cada posicao do array
// // colocar cada posicao/fruta em UPPERCASE que o maiusculo
// // o retorno da funcao MAP está sendo atribuido ao novo array frutasVermelhas1

// let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
// // array de array
// // concatenou os arrays declarados inicialmente (linhas 1 a 3)
// // append de arrays -> manter o que tem antes
// // SOMAR SEM SOBRESCREVER

// console.log(todasFrutas)
// // imprime a variavel todasFrutas

// // questao 08
// // leitura readFile
// // escrita: writeFileSync e appendFileSync

// // questao 09
// let valor=5;
// let fatorial=1;
// for (let i=valor; i>1; i--) {

//        // f =5*4 
//     // f + = 4*3
//      // f += 3*2
//      // f += 2*2
//      // f += 1*1
//     fatorial*=i; // acumulador
// }
// console.log('Fatorial = '+fatorial);

// // questao 10
// // json, fora do código, tratamento de arquivo
// // Ler um arquivo, READ FILE SYNC
// // adicionar conteúdo ao já existente, APPEND FILE SYNC
// // transformar dados Json em objetos literais, PARSE - ENTRADA: JSON E SAIDA: OBJETO LITERAL
// //, adicionar conteúdo substituindo o já existente. WRITE FILE SYNC

// // questao 11
// // referencia
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// // - Em relação às CLOSURES é INCORRETO afirmar:
// // São funções dentro de outras funções -> escopo, callback (passando a funcao por paramento), funcao recursiva
// // São funções que ficam aninhadas -> uma dentro a outra - escopo CLOSURE
// // São funções que se alojam em conteiners
// // São funções onde temos a relação de pai e filho

// // São funçoes representadas por arrow function

// // questao 12
// let frutasAmarelas12=['melão','mamão','limão'];
// let [fruta1, fruta2, fruta3] = frutasAmarelas12;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);
// // Melão, Mamão e Limão, conceito: desestruturação

// // questao 13
// let x=5;
// let y=x++ + ++x; // incremento soma pre incremento
// console.log('y= '+y);
// x=3;
// y=x*(x+1)*x++;
// x=5;
// y=3;
// y*= x+1
// console.log("x= "+x);
// console.log('y= '+y);

// Questão 14
// Essa questão abrange a definição da estrutura de IF, que se sua condição tiver uma resposta verdadeira, este será ignorado.
// Logo, o IF sendo ignorado, "A instrução abaixo do fechamento do if é executada."

// // Numa construção de um IF sem o ELSE o que acontece se o teste da condição retornar FALSE?
// // A instrução abaixo do fechamento do if é executada.

// // questao 15
// // 0 10 20 30 40 50
// for (var i=0; i<50; i+=10) {
//     console.log(i);
// }
// console.log(i);

// // questao 16
// // Qual o nome de variável que está correto?
// // nomePessoa
// // as outras tinham número, caracteres especiais e espaço entre os nomes
// // numero no inicio da varial
// // SEM palavras reservadas
// // o underline não é um problema

// // questao 17
// // IF TERNARIO === IF ELSE
// let questao17 = 50;
// let resto = 50%2;
// resposta = resto == 0 ? 'Par': 'Impar';
// console.log(resposta);

// questao 18

// function soletrar(texto) {
//     console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("*"));
//     // D-I-G-I-T-A-L-H-O-U-S-E e C-T-D
// }

// // chamada 1 parametro DH, mostre na tela
// soletrar("digital-house");
// soletrar("ctd");

// soletrar(['D', 'I', 'G', 'I','T', 'A', 'L', '-','H', 'O', 'U', 'S','E'])

// Substitui cada hífen por '',
// transforma o texto em letras maiúsculas,
// transforma a string em array
//junta o array com o separador hífen

// questao 19
// Sobre o Node é correto afirmar:
// O Node é um interpretador da linguagem Javascript,
//de código aberto, que possibilita a execução de códigos da linguagem do lado do servidor.

// questao 20
// A sigla NPM significa:
// Node Package Manager