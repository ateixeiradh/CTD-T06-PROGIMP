// SWITCH CASE
// É USADO PARA CONTROLE DE FLUXO
// ELE VAI TER CONDIÇÕES A SEREM ATENDIDAS OU NÃO, IGUAL A ESTRUTURA DE IF-ELSE

// Switch: Inicia o switch, e possui na frente à variável que deve validar;
// Case: Criação de um novo caso possível,
// tendo a frente o valor que a variável deve ter para executar aquele caso;

// Break: Indica o término do caso.
// É essencial utilizar para que não continue a execução de outros casos, como o default;

// Default: Similar ao else da estrutura if,
// significa um último recurso se nenhum dos casos tenham se iniciado,
// como o nome diz, é um caso padrão.

function qualOMes(valor) {
    // 1 a 12
    switch (valor) {
        case '1': // (valor < 0)
            console.log("JANEIRO");
            // chamarNovaFuncao();
            break;
        case '2':
            console.log("FEVEREIRO");
            break;
        case '3':
            console.log("MARÇO");
            break;
        case '4':
            console.log("ABRIL");
            break;
        case '5':
            console.log("MAIO");
            break;
        case '6':
            console.log("JUNHO");
            break;
        case '7':
            console.log("JULHO");
            break;
        case '8':
            console.log("AGOSTO");
            break;
        case '9':
            console.log("SETEMBRO");
            break;
        case '10':
            console.log("OUTUBRO");
            break;
        case '11':
            console.log("NOVEMBRO");
            break;
        case '12':
            console.log("DEZEMBRO");
            break;
        default:
            console.log("Mês INVÁLIDO");
            break;
    }

}

qualOMes(0);
qualOMes('6');
qualOMes('1');
qualOMes('13');