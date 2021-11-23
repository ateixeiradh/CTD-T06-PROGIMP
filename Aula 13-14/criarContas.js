const ContaBancaria = require("./ContaBancaria");

// var listaContas = [ 
//     new ContaBancaria(5486273622, "Conta Corrente",	27771,	"Abigael Natte"),
//     new ContaBancaria(1183971869, "Conta Poupança",	8675,	"Ramon Connell"),
//     new ContaBancaria(9582019689, "Conta Poupança",	27363,	"Jarret Lafuente"),
//     new ContaBancaria(1761924656, "Conta Poupança",	32415,	"Ansel Ardley"),
//     new ContaBancaria(7401971607, "Conta Poupança",	18789,	"Jacki Shurmer"),
//     new ContaBancaria(630841470,	"Conta Corrente",	28776,	"Jobi Mawtus"),
//     new ContaBancaria(4223508636, "Conta Corrente",	2177,	"Thomasin Latour"),
//     new ContaBancaria(185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden"),
//     new ContaBancaria(3151956165, "Conta Corrente",	7601,	"Alonso Wannan"),
//     new ContaBancaria(2138105881, "Conta Poupança",	33196,	"Bendite Huggett")
// ];

var listaContas = [];
// let conta1 = new ContaBancaria(5486273622, "Conta Corrente",	27771,	"Abigael Natte");
// let conta2 = new ContaBancaria(1183971869, "Conta Poupança",	8675,	"Ramon Connell");

// listaContas.push(conta1, conta2);


listaContas.push(new ContaBancaria(5486273622, "Conta Corrente",	27771,	"Abigael Natte"));
listaContas.push(new ContaBancaria(1183971869, "Conta Poupança",	8675,	"Ramon Connell"));
listaContas.push(new ContaBancaria(9582019689, "Conta Poupança",	27363,	"Jarret Lafuente"));
listaContas.push(new ContaBancaria(1761924656, "Conta Poupança",	32415,	"Ansel Ardley"));
listaContas.push(new ContaBancaria(7401971607, "Conta Poupança",	18789,	"Jacki Shurmer"));
listaContas.push(new ContaBancaria(630841470,	"Conta Corrente",	28776,	"Jobi Mawtus"));
listaContas.push(new ContaBancaria(4223508636, "Conta Corrente",	2177,	"Thomasin Latour"));
listaContas.push(new ContaBancaria(185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden"));
listaContas.push(new ContaBancaria(3151956165, "Conta Corrente",	7601,	"Alonso Wannan"));
listaContas.push(new ContaBancaria(2138105881, "Conta Poupança",	33196,	"Bendite Huggett"));

// console.log(listaContas);

module.exports = listaContas;