// Exercícios de interpretação de código

// EXERCÍCIO 1

/* a. []

   b. [0, 1, 0, 1, 2, 3]

   c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

*/



// EXERCÍCIO 2

/* a. 0
      2
      undefined

   b. O código funcionaria se os valores do array fossem substituídos por números e na chamada da função 
      pelo console.log, passando número por parâmetro. Não funciona se trocar 'nome' por número, pois ela
      guarda os itens que contém no array, número não é considerado nome de variável 

*/



// EXERCÍCIO 3

// O array de resultado A irá somar com o valor armazenado mais o valor do parâmetro passado 




// EXERCÍCIO 4 

/* a. 

let idadeCachorro = (idadeHumano) => {
    const numero = idadeHumano * 7;
    return numero;
}

console.log(idadeCachorro(3));  */

//b 

function informacao (nome, idade, endereco, estudante) {

    let resp = " ";

    if (estudante) {
        resp = "sou";
    } else if (estudante === false) {
        resp = "não sou";
    }

    return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + resp + " estudante.")
}

console.log(informacao("Marcos", 31, "Taquaritinga", true));