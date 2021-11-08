/***
 * Em um parque de diversões nos pedem 
 * um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
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
*/

/**
 * 
 * @param {*} altura 
 * @param {*} vemAcompanhado 
 * @returns podeSubir 
 */
function podeSubir(altura, vemAcompanhado){ // parametros

    let podeSubir = false; // estado da resposta

    if (altura <= 2.0 && altura >= 1.20){ // se pessoa medir entre 1.20m e 2m, ela pode subir SOZINHA
        podeSubir = true // estado da resposta: pode subir SOZINHA
    }

    if(altura >= 1.20 && vemAcompanhado){ // se a pessoa medir mais que 1.20m E vier acompanhada
        podeSubir = true // estado da resposta: pode subir ACOMPANHADA
    }
    return podeSubir;

}

/**
 * Funcao alterada
 */
function mensagemPodeSubir(altura,vemAcompanhado){
    if((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)){
        // return true
        return console.log("Acesso autorizado");
    }
    else{
        // return false
        return console.log("Acesso autorizado somente com acompanhante");
    }
}

function podeSubirUnica(altura,vemAcompanhado){
    return (altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)

}

function liberaAcesso(altura,vemAcompanhado){
    if(podeSubirUnica(altura, vemAcompanhado)){
        return console.log("Acesso autorizado");
    }
    else{
        return console.log("Acesso autorizado somente com acompanhante");
    }
}

podeSubir(1.74, false);
mensagemPodeSubir(1.74, false);
liberaAcesso(1.20, true);