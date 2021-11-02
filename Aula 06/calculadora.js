// exercicio calculadora aula 06
// comentário em linha

/* comentário em bloco  */

/**
 * comentário em bloco para documentação
 * não é muito utilizado em JS
 * DOCUMENTAÇÃO DO CÓDIGO - VERIFICAR QUAL O CONTEXTO E LINGUAGEM que está sendo usado
 */

// criar funcao adicionar
// receber 2 parametros
// retorno vai ser a soma dos 2 parametros
function adicionar(a, b) {
    // let soma = a + b;
    // var soma = a + b;
    // console.log("funcao adicionar - ", soma);
    
    return a+b;
}

// adicionar(1,1);
// console.log(adicionar(10,1));
// somar = adicionar(5,5);
// console.log("mostrar somar - " + somar);

// console.log("funcao adicionar - " + adicionar(1,1));

function subtrair(a, b) {
    return a-b;
}

// function subtrairNovo(a,b){
//     return b-a; // faz diferença a ordem da operação
// }

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

function quadradoDoNumero(a){
    return multiplicar(a,a);
}

console.log("multiplicar ", multiplicar(5,2));
console.log(quadradoDoNumero(5));