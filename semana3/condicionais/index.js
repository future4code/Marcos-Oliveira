// Exercícios de interpretação de código

/* Exercício 1 - O código pede que o usuário digite um valor qualquer, que é armazenado na variável 
       (respostaDoUsuario). Esta variável é armazenada em outra (numero) já com o cast Number.
       O valor digitado é testado por uma estrutura de condição, que pega o valor e divide por 2,
       a condição analisa o resto da divisão, caso seja 0 o número é par e imprime "Passou no teste",
       senão o número é ímpar e imprime "Não passou no teste" */


/* Exercício 2 - a. O código pede que o usuário digite o nome de uma fruta (variável fruta), e para determinadas 
          frutas é estipulado um preço (variável preco), caso a fruta digitada não contenha um preço 
          atribuído, o preço será sempre o mesmo (5) 
       
       b. O preço da fruta Maça é R$ 2.25 
       
       c. 24.55 
       
       d. O preço da fruta Maça é R$ 5
          Devido a falta do comando 'break' o código continuaria executando e seria interrompido no após 
          o comando 'default', sendo atribuído o valor de 5 */


/* Exercício 3 - Não será mostrada mensagem. O comando 'concole.log' está fora do bloco '{ }' no qual a variável 
       (mensagem) que ele quer acessar pertence. O comando só conseguiria acessar a variável caso ele também 
       pertencesse ao mesmo bloco */




// Exercícios de escrita de código

// Exercício 4 - a.

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



// Exercício 5 - a. https://drive.google.com/file/d/1oRwcHjFV3om052zuOqh3P6JWGKhQMh1J/view?usp=sharing

// b.
/*const animal = prompt("Digite o nome de um animal");
const pergunta = prompt("Ele possui ossos? Sim/Não");
let resp = pergunta; 

if (resp === "Sim") {
    let resp = prompt("Ele é mamífero? Sim/Não");
    if (resp === "Sim") {
        let resp = prompt("Ele é racional?");
        if (resp === "Sim") {
            console.log("O(A) " + animal + " é um ser humano");
        } else if (resp === "Não") {
            console.log("O(A) " + animal + " é um mamífero não humano");
        }    
    } else if (resp === "Não") {
        let resp = prompt("Ele possui penas? Sim/Não");
        if (resp === "Sim") {
            console.log("O " + animal + " é uma ave");    
        } else if (resp === "Não") {
            let resp = prompt("Ele é terrestre? Sim/Não");
            if (resp === "Não") {
                console.log("O(A) " + animal + " é um peixe");
            }
        } else if (resp === "Sim") {
            let resp = prompt("Parte da vida na água? Sim/Não");
            if (resp === "Sim") {
                console.log("O(A) " + animal + " é um anfíbio")
            } else if (resp === "Não") {
                console.log("O(A) " + animal + " é um réptil")
            }
        }   
    }
} else if (resp === "Não") {
    console.log("O(A) " + animal + " é um invertebrado");
}*/



// Desafio

const nome = prompt("Nome do cliente");
const tipo = prompt("Tipo de jogo - IN/DO" );
const etapa = prompt("Etapa do jogo - SF/DT/FI");
const categoria = prompt("Categoria - 1/2/3/4");
const quantidade = prompt("Quantidade de ingressos"); 
let qtd = Number(quantidade);

if (tipo === "DO") {
    if (etapa === "SF") {
        if (categoria === 1) {
            let valor = (qtd * 1320);
            let valorIng = 1320;  
        } else if (categoria === 2) {
            let valor = (qtd * 880);
            let valorIng = 880;
        } else if (categoria === 3) {
            let valor = (qtd * 550);
            let valorIng = 550;
        } else if (categoria === 4) {
            let valor = (qtd * 220);
            let valorIng = 220;
        }  
    } else if (etapa === "DT") {
        if (categoria === 1) {
            let valor = (qtd * 660); 
            let valorIng = 660;
        } else if (categoria === 2) {
            let valor = (qtd * 440);
            let valorIng = 440;
        } else if (categoria === 3) {
            let valor = (qtd * 330);
            let valorIng = 330;
        } else if (categoria === 4) {
            let valor = (qtd * 170);
            let valorIng = 170;
        }
    } else if (etapa === "FI") {
        if (categoria === 1) {
            let valor = (qtd * 1980);
            let valorIng = 1980; 
        } else if (categoria === 2) {
            let valor = (qtd * 1320);
            let valorIng = 1320;
        } else if (categoria === 3) {
            let valor = (qtd * 880);
            let valorIng = 880;
        } else if (categoria === 4) {
            let valor = (qtd * 330);
            let valorIng = 330;
        }
    }
} else if (tipo === "IN") {
    if (etapa === "SF") {
        if (categoria === 1) {
            let valor = ((qtd * 1320) * 4.1);
            let valorIng = 1320; 
        } else if (categoria === 2) {
            let valor = ((qtd * 880) * 4.1);
            let valorIng = 880;
        } else if (categoria === 3) {
            let valor = ((qtd * 550) * 4.1);
            let valorIng = 550;
        } else if (categoria === 4) {
            let valor = ((qtd * 220) * 4.1);
            let valorIng = 220;
        }
    } else if (etapa === "DT") {
        if (categoria === 1) {
            let valor = ((qtd * 660) * 4.1); 
            let valorIng = 660;
        } else if (categoria === 2) {
            let valor = ((qtd * 440) * 4.1);
            let valorIng = 440;
        } else if (categoria === 3) {
            let valor = ((qtd * 330) * 4.1);
            let valorIng = 330;
        } else if (categoria === 4) {
            let valor = ((qtd * 170) * 4.1);
            let valorIng = 170;
        }
    } else if (etapa === "FI") {
        if (categoria === 1) {
            let valor = ((qtd * 1980) * 4.1);
            let valorIng = 1980; 
        } else if (categoria === 2) {
            let valor = ((qtd * 1320) * 4.1);
            let valorIng = 1320;
        } else if (categoria === 3) {
            let valor = ((qtd * 880) * 4.1);
            let valorIng = 880;
        } else if (categoria === 4) {
            let valor = ((qtd * 330) * 4.1);
            let valorIng = 330;
        }
    }
}

console.log("---Dados da Compra---");
console.log("Nome do cliente: " + nome);
console.log("Tipo do jogo: " + tipo);
console.log("Etapa do jogo: " + etapa);
console.log("Categoria: " + categoria);
console.log("Quantidade de ingressos: " + qtd);
console.log("---Valores---");
console.log("Valor do ingresso: " + valorIng);
console.log("Valor total: " + valor);   




