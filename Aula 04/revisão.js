// PENSAMENTO COMPUTACIONAL
// Parte lógica
// 4 partes do pensamento computacional
// decompor
// identificar padrões
// abstrair
// algoritmizar

// CONFIGURAR O AMBIENTE DE DESENVOLVIMENTO
// AMBIENTE DE DESENVOLVIMENTO = a própria máquina do DEV
// SO - Linux/Windows/Mac
// QUAL A LINGUAGEM? JAVASCRIPT
// APOIO ao JAVASCRIPT - NODE
// ADMINISTRA OS PACOTES/DEPENDÊNCIAS da LINGUAGEM - NPM
// FERRAMENTA DE CONTROLE DE VERSÃO - GIT
// A nuvem que armazena o controle de código (ou versão) - Github
// IDE - VSCODE
// Outras IntelliJ, Eclipse, Netbeans

// VAMOS FAZER CÓDIGO
// VARIÁVEIS
    // espaços de memória para armazenar diferentes tipos de dados
var fimBimestre = false;
let numeroDeAvaliacoes = 0;
const infoFixaMateria = "Matéria de Programação Imperativa";

// TIPOS DE DADOS dessas variáveis
    // String
    // Number -> float, Double, byte, bit
    // Booleano
    
    // NaN (not a number) ou Undefined (não definido) - NÃO são tipos de dados
    // NaN (not a number) - SITUAÇÕES onde validações não são números e deveria ser
    // Undefined (não definido) - SITUAÇÕES onde variáveis não existem

    // null NÃO É UM TIPO DE DADO
    // boolean - null
    // string - undefined

// FUNÇÕES para resolver os problemas COTIDIANOS
// O QUE É UMA FUNÇÃO?
// um método que pode ser reaproveitado (chamado várias vezes)
// um bloco código / conjunto de código que agrupa funcionalidades
// Estrutura que vc "guarda" um "sub-algoritmo" que pode ser chamado a qqer momento

// mostrar o nome da matéria
function mostrarMateria() { // ESTRUTURA BÁSICA DE FUNÇÃO
    // PALAVRA RESERVADA + NOME DA FUNÇÃO
    // RETORNO
    return console.log(infoFixaMateria);
}

// CRIAMOS UMA FUNÇÃO
// REALIZAR UMA AÇÃO que envolve operadores
// OPERADORES
    // MATEMÁTICOS
    // [adição +] [subtração -] [multiplicação *] [divisão /] [resto da divisão % (MOD - módulo)]

    //  INCREMENTO ou DECREMENTO
    // ++ ou --
    // i = i+1 -> i++
    
    // EXEMPLO incremento ANTES de atribuir = operador antes do igual
    // i = 0
    // i < 50 [0 10]
    // i += 10
    // i = 10

    // LÓGICOS
    // VALIDAÇÕES LÓGICAS
        // AND && [e] - AMBOS lados da operação PRECISAM ser verdadeiros = true
        // OR || [ou] - QUALQUER lado da operação PRECISA ser verdadeiro = true
        // NOT ! [não] - O VALOR OPOSTO
            // - com - = +
    
    // == , != , > , >= , < e <=
    // COMPARAÇÕES SIMPLES

    // COMPARAÇÃO ESTRITA [===] valor e tipo


// CONTROLE DE FLUXO DA APLICAÇÃO
    // IF ELSE
    // OPERADOR TERNÁRIO

// STRINGS E ARRAYS

// ESTRUTURAS DE REPETIÇÃO
    // FOR
    // WHILE

// OBJETOS

// MÉTODOS AVANÇADOS
    // ARROW FUNCTIONS ->
    // CALLBACK -> entrypoint
