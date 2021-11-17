
const alice = [23, 82, 46];
const bob = [45, 8, 32];

function encontrarGanhador(a, b) { 
    
    let pontosParticipanteA = 0; // participante a 
    let pontosParticipanteB = 0; // participante b


    // A tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2]. 
    
    for (let contador = 0; contador < a.length; contador++) { // arrays iguais

        console.log("contador = ", contador);
        console.log("a[contador] = ", a[contador]);
        console.log("b[contador] = ", b[contador]);
        
        if (a[contador] > b[contador]) {
            // Se a[i] > b[i], então Alice recebe 1 ponto. 
            pontosParticipanteA = pontosParticipanteA +1; // ++
        } else if (a[contador] < b[contador]) {
            // Se a[i] < b[i], então Bob recebe 1 ponto. 
            pontosParticipanteB = pontosParticipanteB +1; // ++
        }

    }

    if (pontosParticipanteA > pontosParticipanteB) {
        return "Alice";
    } else if (pontosParticipanteA < pontosParticipanteB) {
        return "Bob";
    } // else
} 

 

// Os pontos de comparação são os pontos totais que uma pessoa ganhou. Não os votos, mas os pontos ganhos em cada etapa. 

// Para os itens do índice 0, Alice recebe um ponto porque a[0] > b[0]. 
// Para a próxima fase, a[1] e B[1] são iguais, não são obtidos pontos. 

// Finalmente, para elementos do índice 2 (terceira etapa), a[2] < b[2] para que Bob receba um ponto. 

// alice = [23, 82, 46];
// bob = [45, 100, 32]; // 82


console.log("O ganhador é: " + encontrarGanhador (alice, bob));


// Para que você não fique com o desejo ou que você possa continuar praticando se quiser, propomos mais alguns exercícios,
// tenha em mente que daqui os exercícios podem subir em dificuldade tanto estrutural quanto lógico; como sempre dizemos, paciência, ignore a complexidade
//  e tente resolvê-la com as ferramentas que você tem à sua disposição, você também pode procurar informações extras no google ou documentações que você conhece!! 
function digitalHouse(numero1, numero2)  {
    
    // A função deve imprimir na tela os números de 1 a 100
    let contador = 1;
    let numeros = [];
    do {
        numeros.push(contador);
        contador++;
    } while (contador <= 100);
    
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i]%numero1 == 0) {
            // Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número.
            numeros[i] = "Digital";
        } else if (numeros[i]%numero2 == 0) {
            // Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número.
            numeros[i] = "Digital House";            
        }
        
    }

    console.log(numeros);

}

digitalHouse();
digitalHouse(2, 5);

// Crie a função digitalHouse() que receberá 2 números como parâmetros. , mas levando em conta os seguintes critérios: 
// ●  
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso. 
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número. 
// somaArray()... Reloaded 
// Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez vamos modificá-lo para que ele possa receber um array de números de qualquer quantidade de elementos. 
// Se você não se lembrar da instrução original: 
// 4
// Você deve criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles. 
// exemplo: 
// ● somaArray([1,2,3]) // 6 
// ● somaArray([10, 3, 10, 4]) // 27 
// ● somaArray([-5,100]) // 95 
// e como estamos ajustando as funções, vamos fazer o mesmo com a função do exercício de simulação join(). 
// você deve modificar a função join() para que ela possa receber uma matriz de strings de qualquer quantidade de elementos. 
// Importante: Você não pode usar o método original Array.join(). 
// por exemplo: 
// join(["o","l","a"]) deve retornar a string "ola". 
// join(["t", "c","h","a,"u"]) deve retornar a string "tchau". 
// 5
