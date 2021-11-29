const andar = _ => console.log("O carro está andando...")
const parou = _ => console.log("O carro parou...")
const acaoCarro = callback => callback()
 
acaoCarro(andar);
acaoCarro(parou);