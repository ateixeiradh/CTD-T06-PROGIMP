let fizzBuzz = (x, y) => {

    for (let i = 0; i < 100; i++) {

        if (i % x === 0 && i % y === 0) { // multiplos de ambos
            console.log('FizzBuzz');

        } else if (i % x === 0) { // multiplo do primeiro parametro
            console.log('Fizz');

        } else if (i % y === 0) { // multiplo do segundo parametro
            console.log('Buzz');
        } else {
            console.log(i);
        }

    }
}

fizzBuzz(3,5);