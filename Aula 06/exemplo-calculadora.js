// calculadora nivel 1
function adicionar(valorA, valorB){
    return valorA + valorB;
}

function subtracao(valorA, valorB){
    return valorA - valorB;
}

function multiplicacao(valorA, valorB){
    return valorA * valorB;
}

function divisao(valorA, valorB){
    return valorA / valorB;
}

// calculadora nivel 2
console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar(10,5));
console.log(subtracao(3,2));

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(multiplicacao(56,1));
console.log(divisao(8,2));

// calculadora nivel 3

function quadradoDoNumero(valorA){
    // return Math.pow(valorA, valorA);
    return multiplicacao(valorA, valorA);

}
console.log(quadradoDoNumero(2))

function mediaDeTresNumeros(valorA, valorB, valorC){
    return divisao( (adicionar(valorA, valorB)+valorC), 3);
    
}

console.log(mediaDeTresNumeros(10,10,10));

// Porcentagem

function calculaPorcentagem (valorA, valorB){
    return multiplicacao (valorA, valorB) / divisao(100,1) + "%";
   
    
}
console.log(calculaPorcentagem(500,35));

function geradorDePorcentagem(valorA, valorB){
    return (multiplicacao (valorA, 100)) / multiplicacao (1, valorB) + "%";

}
console.log(geradorDePorcentagem(2,100));