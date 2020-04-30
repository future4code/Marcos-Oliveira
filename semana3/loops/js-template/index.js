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

  /*const numEscolhido = prompt("Escolha um número");
  let boolean = false;
  numTentativa = 0;

  console.log("Vamos Jogar?");
  
  for (i = 0; boolean === false; i++) {
      let numero = prompt("Digite um número para tentar acertar")
      numTentativa += 1;
      if (numero !== numEscolhido) {
        boolean = false;  
        console.log("O número digitado foi: " , numero);
            if (numero > numEscolhido) {
                console.log("Errrrrou, é menor");
            } else if (numero < numEscolhido) {
                console.log("Errrrrou, é maior");
            }
      } else {
          console.log("Acertou!!!");
          console.log("O número de tentativas foi: ", numTentativa);
          boolean = true;
      }
    
  }*/
    


  // DESAFIO 3
  
  const sorteio = Math.floor(Math.random() * 100 + 1);
  const numSorteado = Number(sorteio);
  let boolean = false;
  numTentativa = 0;

  console.log("Vamos Jogar?");
  
  for (i = 0; boolean === false; i++) {
    let numero = Number(prompt("Digite um número para tentar acertar"));
    numTentativa += 1;
      if (numero !== numSorteado) {
        boolean = false;  
        console.log("O número digitado foi: " , numero);
            if (numero > numSorteado) {
                console.log("Errrrrou, é menor");
            } else if (numero < numSorteado) {
                console.log("Errrrrou, é maior");
            }
      } else {
          console.log("Acertou!!!");
          console.log("O número de tentativas foi: ", numTentativa);
          boolean = true;
      }
  }

  /*Não foi difícil encontrar o código para usar números aleatórios, uma rápida pesquisa no 
    Google e já encontrei a solução; como você faz a pesquisa para encontrar a solução para 
    resolver um problema ou entender uma mensagem de erro é o diferencial.  
  */