var string1 = "teste";
var string2 = "stete";

// separando
var array1 = string1.split("");
var array2 = string2.split("");

// colocando em ordem os caracteres e remontando as strings
array1 = array1.sort().join('');
array2 = array2.sort().join('');

// verificando se sao iguais
console.log( array1 == array2 );