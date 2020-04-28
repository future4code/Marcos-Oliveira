// Exercícios de interpretação de código

/* 1 - O código pede que o usuário digite um valor qualquer, que é armazenado na variável 
       (respostaDoUsuario). Esta variável é armazenada em outra (numero) já com o cast Number.
       O valor digitado é testado por uma estrutura de condição, que pega o valor e divide por 2,
       a condição analisa o resto da divisão, caso seja 0 o número é par e imprime "Passou no teste",
       senão o número é ímpar e imprime "Não passou no teste" */


/* 2 - a. O código pede que o usuário digite o nome de uma fruta (variável fruta), e para determinadas 
          frutas é estipulado um preço (variável preco), caso a fruta digitada não contenha um preço 
          atribuído, o preço será sempre o mesmo (5) 
       
       b. O preço da fruta Maça é R$ 2.25 
       
       c. 24.55 
       
       d. O preço da fruta Maça é R$ 5
          Devido a falta do comando 'break' o código continuaria executando e seria interrompido no após 
          o comando 'default', sendo atribuído o valor de 5 */


/* 3 - Não será mostrada mensagem. O comando 'concole.log' está fora do bloco '{ }' no qual a variável 
       (mensagem) que ele quer acessar pertence. O comando só conseguiria acessar a variável caso ele também 
       pertencesse ao mesmo bloco */


// Exercícios de escrita de código


// 4 - a.

/*const num1 = prompt("Digite primeiro número");
const num2 = prompt("Digite segundo numero");

const primeiro = Number(num1);
const segundo = Number(num2);

if (primeiro > segundo) {
    console.log(segundo + " " + primeiro );
} else if (segundo > primeiro) {
    console.log(primeiro + " " + segundo);
} else {
    console.log("Números iguais");
}*/


// b. 

/*const num1 = prompt("Digite primeiro número");
const num2 = prompt("Digite segundo numero");
const num3 = prompt("Digite terceiro número");

const primeiro = Number(num1);
const segundo = Number(num2);
const terceiro = Number(num3);

if ((primeiro > segundo) && (primeiro > terceiro) && (segundo > terceiro)) {
    console.log(primeiro + " " + segundo + " " + terceiro);

} else if ((primeiro > segundo) && (primeiro > terceiro) && (segundo < terceiro)) {
    console.log(primeiro + " " + terceiro + " " + segundo);

} else if ((segundo > primeiro) && (segundo > terceiro) && (primeiro > terceiro)) {
    console.log(segundo + " " + primeiro + " " + terceiro);

} else if ((segundo > primeiro) && (segundo > terceiro) && (primeiro < terceiro)) {
    console.log(segundo + " " + terceiro + " " + primeiro);

} else if ((terceiro > primeiro) && (terceiro > segundo) && (primeiro > segundo)) {
    console.log(terceiro + " " + primeiro + " " + segundo);

} else if ((terceiro > primeiro) && (terceiro > segundo) && (primeiro < segundo)) {
    console.log(terceiro + " " + segundo + " " + primeiro);

} else {
    console.log("Números iguais");

}*/
       
