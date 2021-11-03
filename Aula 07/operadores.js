/* ATRIBUIÇÃO */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ARITMÉTICOS */

// Nos permitem fazer operações matemáticas

console.log ("//---> Soma = ", 10 + 15);
console.log ("//---> Subtração = ", 10 - 15);
console.log ("//---> Multiplicação = ", 10 * 15);
console.log ("//---> Divisão = ", 10 / 15);

let quinze = 15;
quinze++;
console.log ("//---> Incremento de um em um: 15 + 1 = ", quinze);

quinze--;
console.log ("//---> Decremento de um em um: 15 - 1 = ", quinze);

const modRestaZero = 15 % 5;
const modRestaUm = 15 % 2;
console.log ("//---> Módulo. O resto obtido da divisão de 15 por 5: 0 = ", modRestaZero);

console.log ("//---> Módulo. O resto obtido da divisão de 15 por 2: 1 = ", modRestaUm);


/**
 * PLANILHA DE DICAS - OPERADORES MATEMÁTICOS
 * 
 * [ = ] ATRIBUI
 * [ + ] SOMA
 * [ - ] SUBTRAI
 * [ * ] MULTIPLICA
 * [ / ] DIVIDE
 * [ % ] RESTO
 * [ ++] AUMENTA UM
 * [ --] DIMINUI UM
 */

/* COMPARAÇÃO SIMPLES */

// OPERADORES LÓGICOS
// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
// == , != , > , >= , < e <=
// &&, || E !


function igual (a, b){
    return a == b; // qual a diferença de usar '==' e '==='
}

function maior (a, b){
    return a > b; // > ou >=
}

function menor (a, b){
    return a < b; // < ou ,=
}

function negacao (a){
    return !a;
}

function condicao(a, b) {
    return a && b;
}

function comparacaoSimples(valorA, valorB){
    console.log("igual == ", igual(valorA, valorB));
    console.log("maior > ", maior(valorA, valorB));
    console.log("menor < ", menor(valorA, valorB));
    console.log("valorA negado ! ", negacao(valorA));
    console.log("valorb negado ! ", negacao(valorB));
    console.log("condicao ", condicao(valorA, valorB));
}

comparacaoSimples(1, 1); // 0 e 1

console.log("/==========================COMPARAÇÃO ESTRITA==========================");
function comparacaoEstrita(){

var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
}

comparacaoEstrita();

function operadores(valorE, valorF){
    console.log(!true);
    console.log(!false);
    console.log(!!false);
    console.log(!!true);
    
    console.log(!1);
    console.log(!!1);
    console.log(!0);
    console.log(!!0);
    console.log(!!"");
}

operadores();


/**
 * PLANILHA DE DICAS - OPERADORES LÓGICOS
 * 
 * [ ! ] NEGADO
 * [ tudo FALSO ]: false, zero/0, vazios: '' ou "", null, undefined, NaN, 0
 * [ tudo VERDADEIRO ]: true, '0', 'false', vazios: [], {}, function(){}, 1
 * [ == ] VALOR
 * [ === ] OBJETO
 */

// exemplo para caso NaN - Not A Number
// divisao string por numero
// "12" % 4
console.log( ! ("string" / 4) );
