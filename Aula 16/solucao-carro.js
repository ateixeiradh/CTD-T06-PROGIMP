const andar = _ => console.log("O carro está andando...")
const parou = _ => console.log("O carro parou...")
const mover = () => console.log("O carro se movimentou...")
const estacionar = () => console.log("O carro foi estacionado!")

const acaoCarro = callback => callback();
 
acaoCarro(andar);
acaoCarro(parou);
acaoCarro(mover);
acaoCarro(estacionar);