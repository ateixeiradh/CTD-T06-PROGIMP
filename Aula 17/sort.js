let numeros = [10, 3, 4, 52, 6, 7];

numeros.sort(
    function (a, b) {
        return a-b;
    }); // [3, 4, 7, 8, 10, 52]
console.log(numeros);