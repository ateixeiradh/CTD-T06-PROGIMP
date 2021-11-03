console.log("=========================");
// exercicio 01 IMC
console.log("// exercicio 01 IMC");
console.log("=========================");
function calcularIndiceDeMassaCorporal(altura, peso) {
    let imc;
    //altura em centímetros deve ser transformada para metros
    altura = altura/100;
    imc = peso/Math.pow(altura,2);
    return imc;
 }
 
let imc = calcularIndiceDeMassaCorporal(168,80);
console.log(imc.toFixed(2));


console.log("=========================");
// exercicio 02 CALCULOS BASICOS
console.log("// exercicio 02 CALCULOS BASICOS");
console.log("=========================");
let soma= function (n1, n2) {
    return n1+n2;
}
 let multiplicacao= function (n1, n2) {
    return n1*n2;
}
 let subtracao= function (n1, n2) {
    return n1-n2;
}
 let divisao= function (n1, n2) {
    return n1/n2;
}
 //executando as funções
console.log(soma(10,20));
console.log(subtracao(10,30));
console.log(multiplicacao(10,30));
console.log(divisao(10,30));

console.log("=========================");
// exercicio 03 FAZER GOL
console.log("// exercicio 03 FAZER GOL");
console.log("=========================");
let  nomeJogador="Luciano";
let golsJogador=0;
let precoEmDolares=0;
 
function fazerGol() {
    golsJogador++;
    console.log("GOL!!!!!!!!");
    precoEmDolares+=10000;
   }
fazerGol();
fazerGol();
fazerGol();
fazerGol();
 
console.log(nomeJogador+' fez '+golsJogador + ' gol(s) e seu preço passou para '+precoEmDolares);

console.log("=========================");
// exercicio 04 HAT TRICK
console.log("// exercicio 04 HAT TRICK");
console.log("=========================");
let novoNomeJogador = "Marcelo";
let novoGolsJogador = 0;
let novoPrecoEmDolares = 10000;
 
function hatTrick() {
    novaFazerGol();
    novaFazerGol();
    novaFazerGol();
    novoPrecoEmDolares+=novoPrecoEmDolares*0.1;
 
}
function novaFazerGol() {
    novoGolsJogador++;
    console.log("GOL!!!!!!!!");
}
 
hatTrick()
console.log(novoNomeJogador + ' fez ' + novoGolsJogador + ' gol(s) e seu preço   passou para ' + novoPrecoEmDolares);
 
