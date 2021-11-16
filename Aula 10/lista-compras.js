let lista = ["Feijão", "Sabonete", "Arroz", "Escova", "Farinha"]
 
console.log("O método Join junta índices de um array, podendo colocar um caractere entre cada índice. Ex: " + lista.join(" - "))
console.log("O método Pop remove e retorna o último índice do array. Ex: " + lista.pop())
 
lista.push("Final")
console.log("O método Push adiciona um novo valor ao array, no seu final. Ex: " + lista)
 
console.log("O método Shift remove e retorna o primeiro elemento do array. Ex: " + lista.shift())
 
lista.unshift("Começo")
console.log("O método Push adiciona um novo valor ao array, no seu começo. Ex: " + lista)
