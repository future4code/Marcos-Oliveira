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





// Exercícios de escrita de código

// EXERCÍCIO 4 

/* a. 

let idadeCachorro = (idadeHumano) => {
    const numero = idadeHumano * 7;
    return numero;
}

console.log(idadeCachorro(3));  */



/* b.

function informacao (nome, idade, endereco, estudante) {

    let resp = " ";

    if (estudante) {
        resp = "sou";
    } else if (estudante === false) {
        resp = "não sou";
    }

    return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + resp + " estudante."
}

console.log(informacao("Marcos", 31, "Taquaritinga", true)); */





// EXERCÍCIO 5

/*function seculo(ano) {
    let resp = " ";

    if ((ano >= 1001) && (ano <= 1100)) {
        resp = "XI";
    } else if ((ano >= 1101) && (ano <= 1200)) {
        resp = "XII";
    } else if ((ano >= 1201) && (ano <= 1300)) {
        resp = "XIII";
    } else if ((ano >= 1301) && (ano <= 1400)) {
        resp = "XIV";
    } else if ((ano >= 1401) && (ano <= 1500)) {
        resp = "XV";
    } else if ((ano >= 1501) && (ano <= 1600)) {
        resp = "XVI";
    } else if ((ano >= 1601) && (ano <= 1700)) {
        resp = "XVII";
    } else if ((ano >= 1701) && (ano <= 1800)) {
        resp = "XVIII";
    } else if ((ano >= 1801) && (ano <= 1900)) {
        resp = "XIX";
    } else if ((ano >= 1901) && (ano <= 2000)) {
        resp = "XX";
    } else if ((ano >= 2001) && (ano <= 2100)) {
        resp = "XXI";
    }

    return resp;
}

console.log(seculo(1534)); */


// EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

/* a.

function tamanhoArray(array) {
    return array.length;
}
console.log(tamanhoArray(array)); */



/* b. 

let valor = (numero) => {
        
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    } 

} 
console.log(valor(7)); */



/* c.

const valor = (array) => {
    let par = 0;
    for (let elemento of array) {
        if (elemento % 2 === 0) {
        par += 1;
        }
    }
    return  par;
} 
console.log(valor(array)); */



/* d. 

const valor = (array) => {
    for (let elemento of array) {
        if (elemento % 2 === 0) {  
            console.log(elemento + " Número par");
        } else {
            console.log(elemento + " Número ímpar");
        }
    }
} 
console.log(valor(array)); */
