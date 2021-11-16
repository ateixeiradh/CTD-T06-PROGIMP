var string1 = "teste";
var string2 = "stete";

console.log(string1, string2);

let lista = ["Macarrão", "Feijão", "Sabonete", "Arroz", "Escova", "Farinha"];

// separando
var array1 = string1.split("");
var array2 = string2.split("");
console.log(array1, array2);

// colocando em ordem os caracteres e remontando as strings
array1 = array1.sort().join('');
// array2 = array2.sort().join('');
// array1 = array1.sort();
array2 = array2.sort(a<b);

console.log(array1, array2);

// verificando se sao iguais
console.log( array1 == array2 );



/**
 * let meuarray = [10, 3, 10, 4]; 
function somarArray(params) {
    
    console.log(meuarray[0] + meuarray[1] + meuarray[2] + meuarray[3]   );
    
}

somarArray();

 */