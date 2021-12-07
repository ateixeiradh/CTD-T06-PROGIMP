
function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
        let par = (i + numero)
        if (par % 2 == 0) {

            return (console.log("O número " + par + " é Par."))
        }
        else {
            return (console.log("O número " + par + " é impar."))
        }
    }

}

loopDePares(5);
loopDePares(6);
