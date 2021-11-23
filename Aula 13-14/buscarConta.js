const listaContas = require("./criarContas");

function buscarConta(nome){

    for (let i=0; i < listaContas.length; i++) {
        // for (let i of listaContas)
        
        if ( listaContas[i].titular == nome) {
            return listaContas[i];
        }
    }

    return "Conta não encontrada.";
}

console.log(buscarConta("Bendite Huggett"));

function exportarPoupanca(){
    let resposta = [];

    for (let i=0; i < listaContas.length; i++) {
        // for (let i of listaContas)
        
        if ( listaContas[i].tipoConta == "Conta Poupança") {
            // acumulador para salvar
            resposta.push(listaContas[i]);
        }
    }

    return resposta;
}

console.log(exportarPoupanca());