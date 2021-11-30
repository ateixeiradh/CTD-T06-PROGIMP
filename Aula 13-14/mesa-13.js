let contaBancaria = {
    numeroConta: 1234,
    tipoConta: "Conta Corrente",
    titularConta: "Ana Teixeira",
    saldo: 100000,

    mostrarSaldo: function () {
        return console.log("E" + this.saldo);
    }
};

function ContaBancaria(numConta, tipoConta, titular, saldo) {
    this.numeroConta = numConta;
    this.tipoConta = tipoConta;
    this.titularConta = titular;
    this.saldo = saldo;
    
}

console.log(contaBancaria);

let conta = ContaBancaria(0123, "Poupança", "Humberto", 10000);
console.log(conta);