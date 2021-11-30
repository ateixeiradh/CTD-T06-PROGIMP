// Exercício “Métodos de arrays”

// Exercício 02
// Crie um array de nomes, que possua dois índices com o nome Maria.
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ["Pedro", "João", "Maria", "Alberto", "Maria"];
let marias = nomes.filter(function (nome) {
    return nome === "Maria"
});
console.log(marias);