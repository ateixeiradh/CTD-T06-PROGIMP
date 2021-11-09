// validação ESTRUTURA IF-ELSE
function validaSenha(senha) {
    let senhaCorreta = "batataBananaTomate";

    // se a senha estiver CORRETA
    // retorna - acesso permitido
 if (senha == senhaCorreta) {
     // if FAZ uma ação
     // SE a condição dele estiver VERDADEIRA
     console.log("acesso permitido");

 } else {
     // se a senha estiver INCORRETA
    // retorna - acesso negado
     console.log("acesso negado");
 }

}

// validaSenha("estruturaCondicional");
// validaSenha("batataBananaTomate");

function validaNovaSenha(senha) {
    let senhaCorreta = "thugstools"
    return senha == senhaCorreta ? console.log("permitido") : console.log("negado");
}

// validaNovaSenha("ifTernario");
// validaNovaSenha("thugstools");

// exemplo
// function limiteDeConsumo(valor) {
//     return valor <= limitePermitido ? aumentarLimite(valor+10) : zerarLimite();
// }