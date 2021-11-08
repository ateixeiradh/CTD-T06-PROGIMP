// O QUE É CONTROLE DE FLUXO
// TOMADA DE DECISÃO DO PROGRAMA
// CONDIÇÕES QUE QUANDO ATENDIDAS OU NÃO 
// O SEU CÓDIGO TEM UMA AÇÃO

// EXEMPLOS PARA CONTROLE DE FLUXO da AULA 08
// Switch
// IF/ELSE

// TODOS TEM UMA CONDIÇÃO

// ESTRUTURA IF-ELSE
// IF -> (condição)== true -> faz uma ação
// ELSE -> caso contrário
// escrita de código TEXTUAL -> SE e SENÃO


/***
 * Em um parque de diversões nos pedem 
 * um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
 * 
 * ESPERA-SE UMA RESPOSTA DE VERDADEIRO OU FALSO:
 * INDICANDO QUE O PASSAGEIRO PODE OU NÃO PODE SUBIR NO BRINQUEDO
 * 
 * Crie uma função podeSubir() que receba dois parâmetros: 
 * altura da pessoa;
 * se está acompanhada.
 * 
 * Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não,
 *  baseado nas seguintes condições:
 * A pessoa deve medir mais de 1.40m e menos de 2 metros.
 * Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
 * Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.
 * 
 * ANÃ = ALTURA = 1.39
 * SÓ SOBE SE ALTURA < 1.4 
 *  && ESTÁ ACOMPANHADA = TRUE
 * 
 * ANÃ = ALTURA = 1.2
*/

/**
 * 
 * @param {*} altura 
 * @param {*} vemAcompanhado 
 * @returns podeSubir 
 */

function podeSubir(altura, vemAcompanhado) {
    let podeSubir;
    
    if (altura > 2) {
        podeSubir = false;
    }

    if (altura < 1.2) {
        podeSubir = false;
    }

    if (altura >= 1.4 && altura <= 2) {
        podeSubir = true;
    }

    if (altura > 1.2 && altura < 1.4 && vemAcompanhado) {
        podeSubir = true;
    }

    return podeSubir;
}

// function podeSubir(altura, vemAcompanhado) { // nome da funcao e parametros de entrada
//     let podeSubir;

//     if ((altura >= 1.41 && altura <= 2.0) ) {
//         podeSubir = true;
//         // * A pessoa deve medir mais de 1.40m e menos de 2 metros.
//     } else if (altura >= 1.2 && vemAcompanhado) { // 1.2 -> true && false = false
//         // 1.35 -> true && true = true
//         //  * Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//         podeSubir = true;
//     } else if (altura > 2 || altura < 1.2) {
//         podeSubir = false;
//     }
//     else {
//         podeSubir = false;
//     }
    
//     // se altura < 1.2
//     // * Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

//     return podeSubir;

//     // if (altura <=2.0 && altura >=1.2 && vemAcompanhado = 1)

// }

// console.log("podeSubir TRUE = "+ podeSubir(1.80, false));
// console.log("podeSubir ANÃ 1.35 NÃO ACOMPANHADA = "+ podeSubir(1.35, false));
// console.log("podeSubir ANÃ 1.35 ACOMPANHADA = "+ podeSubir(1.35, true));
// console.log("podeSubir 2.10 + false = "+ podeSubir(2.10, false));
// console.log("podeSubir 2.10 + true = "+ podeSubir(2.10, true));
// console.log("podeSubir 1.19 = "+ podeSubir(1.19, false));
console.log("podeSubir 2.1 = "+ podeSubir(2.1, true));
console.log("podeSubir 2.1 = "+ podeSubir(2.1, false));