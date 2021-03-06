"use strict";
const operacoes = process.argv[2];
const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);
let resposta;
function getOperacoes() {
    if (process.argv[2] === undefined || process.argv[3] === undefined || process.argv[4] === undefined) {
        resposta = "Está faltando parâmetro(s) - Operação - Valor1 - Valor2";
    }
    else {
        switch (operacoes) {
            case 'add':
                resposta = valor1 + valor2;
                break;
            case 'sub':
                resposta = valor1 - valor2;
                break;
            case 'mult':
                resposta = valor1 * valor2;
                break;
            case 'div':
                resposta = valor1 / valor2;
                break;
            default:
                break;
        }
    }
    return resposta;
}
const red = '\u001b[31m';
console.log(red + "Resultado: " + getOperacoes());
//# sourceMappingURL=exercicio2.js.map