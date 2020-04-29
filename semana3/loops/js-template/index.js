//Exercícios de interpretação de código

/*EXERCÍCIO 1

O código usa o laço 'for' para iterar até a variável 'i' ser menor que 15, e
a cada iteração a variável 'sum' soma o valor de i armazenado com o novo valor 
atribuído a 'i'.

Resultado: 105*/ 


/*EXERCÍCIO 2

a. Comando push insere um novo item ao array.

b. [10, 15, 25, 30]

c. numero = 3 => [12,15,18,21,27,30]
   numero = 4 => [12]*/



//Exercícios de escrita de código

//EXERCÍCIO 3

// a.

/*let arrayOriginal = [2,7,10,16,22,32,50,88,100];
  let maiorValor = arrayOriginal[0];
  let menorValor = arrayOriginal[0];

  for (let numero of arrayOriginal) {
    if (numero > maiorValor) {
        maiorValor = numero;
    } else if (numero < menorValor) {
        menorValor = numero;
    }
  }

  console.log("Maior número ", maiorValor);
  console.log("Menor número ", menorValor);*/


// b.

  /*let arrayOriginal = [2,7,10,16,22,32,50,88,100];
  let novoArray = [];

  for (let numero of arrayOriginal) {
    let lista = numero / 10;
    novoArray.push(lista);
  }

  console.log(novoArray);*/


// c. 

  /*let arrayOriginal = [2,7,10,16,22,32,50,88,100];
  let novoArray = [];

  for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
        let lista = numero;
        novoArray.push(lista);
    }
  }

  console.log(novoArray);*/


// d.

  /*let arrayOriginal = [2,7,10,16,22,32,50,88,100];
  let novoArray = [];

  for (let i = 0; i < arrayOriginal.length; i++) {
    let index = i;
    novoArray.push(`O elemento do índex ${index} é: ${arrayOriginal[i]}`);
  }

  console.log(novoArray);*/



  // DESAFIO 1

  /*    0
        00
        000
        0000
  */



  // DESAFIO 2

  const numEscolhido = prompt("Escolha um número");
  prompt("Vamos Jogar?")