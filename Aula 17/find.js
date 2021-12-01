let moedas = [
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Ethereum', simbolo: 'ETH' },
    { nome: 'Cardano', simbolo: 'ADA' },
];

console.log(moedas.find(
    function (moeda) {
        return moeda.simbolo === 'Bitcoin';
    })); // {nome: 'Bitcoin', simbolo: 'BTC'})

console.log(moedas);