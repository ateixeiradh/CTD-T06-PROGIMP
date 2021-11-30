function fatorial(n) {
    var res = 1;
    for (var i = n; i >= 1; i--) {
        res = res * i;
    }
    return res;
}


function fatorialRecursivo(n) {
    if (n <= 1) return 1;
    return n * fatorialRecursivo(n - 1);
}


console.log(fatorial(5));

console.log(fatorialRecursivo(5));