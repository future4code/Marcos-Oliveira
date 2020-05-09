// Exercícios de interpretação de código

/* 1. Cria uma função 'conversorDeMoeda' que recebe um parâmetro (valorEmDolar). Dentro da função a variável 
      'cotacao' recebe um Number pelo prompt informando a cotação do dólar, e retorna o valor passado no parâmetro
      multiplicado pela variável 'cotacao', que armazenou o valor informado no prompt.
      A variável 'meuDinheiro' recebe a função 'conversorDeMoeda' com parâmetro 100.
      'meuDinheiro' é exibida no console. Caso valor informado no prompt seja 6, o valor exibido no console será 600.
      
    2. Cria uma função 'investeDinheiro' com dois parâmetros (tipoDeInvestimento, valor). Dentro da função contém 
       uma variável 'valorAposInvestimento' e um 'Switch' que analisa a string recebida no parâmetro 'tipoDeInvestimento'.
       Caso (case) tipoDeInvestimento seja "Poupança" a variável valorAposInvestimento será igual o 'valor' passado como 
       parâmetro multiplicado por 1.03, assim sendo com as outras opções: (case "Renda fixa" * 1.05), ("CDB" * 1.06), 
       ("Ações" * 1.1), a opção default será caso tipoDeInvestimento não esteja dentre essas opções (será mostrado um alert)
       A função retorna 'valorAposInvestimento'.
       A variável novoMontante recebe a função com os parâmetros ("Ações", 150)
       A variável segundoMontante recebe a função com os parâmetros("Tesouro Direto", 200)
       É impresso no console 'novoMontante' com valor 165. 'segundoMontante' exibe o alert

    3. Cria o array 'numeros' com valores e os arrays 'array1' e 'array2' vazios.
       Com o 'for of' para iterar no array 'numeros', é feito uma condição com 'if'; se o resto da divisão por 2 for 0,
       este valor é adicionado no array1 (array1.push(numero)), Se for diferente de 0, o valor é adicionado no array2 (array2.push(numero))
       No console é impresso a quantidade total de números no array 'numeros' (14), e os valores contidos nos array1 (6) e array2 (8).
       
    4. Cria um array 'numeros' duas variáveis, 'numero1' com valor 'Infinity' e 'numero2' com valor 0.
       Dentro de um 'for of' testa-se duas condições.
       1ª ------ 
       2ª Para cada iteração no array numeros, o valor for maior que a variável numero2, a mesma recebe o valor do array. Para esse teste
       é exibo no console o valor 1590.

*/





// Exercícios de Lógica de Programação

// 1. for - for of - forEach 

/*const numeros = [3,4,5,6,7];
let soma = 0;

for (numero of numeros) {
    soma += numero;
}

console.log(soma); */       


// 2. 

/* a) false
   b) false
   c) true
   d) true
   e) true     
*/


// 3. Este código não funciona, pois ele entra em um loop infinito porque a variável 'i'
//    sempre vai ser menor que 'quantidadeDeNumerosPares' 

// Código alterado para funcionar

/* const quantidadeDeNumerosPares = 3;
    let i = 0;
    while(i <= (quantidadeDeNumerosPares + 1)) {
        console.log(i);
        i += 2;
        quantidadeDeNumerosPares -1;
    } 
*/


// 4.

/* function triangulo (a, b , c) {
      if (a === b && b === c)  {
         console.log("Triângulo Equilátero");
      } else if (a === b || a === c || b === c) {
         console.log("Triângulo Isósceles");
      } else {
        console.log("Triângulo Escaleno");
      }
   }
*/


// 5 . 

/*    function numeros (valor1, valor2) {
    
        let resposta = "";
        let resposta2 = "";

        if (valor1 > valor2) {
            const maior = valor1;
            const diferenca = valor1 - valor2;
        } else {
            maior = valor2;
            diferenca = valor2 - valor1;
        }

        if (valor1 % valor2 === 0) {
            resposta = `${valor1} é divisível por ${valor2}`;
        } else {
            resposta = `${valor1} não é divisível por ${valor2}`;
        }

        if (valor2 % valor1 === 0) {
            resposta2 = `${valor2} é divisível por ${valor1}`;
        } else {
            resposta2 = `${valor2} não é divisível por ${valor1}`;
        }

        console.log("O maior é: " + maior);
        console.log(resposta);
        console.log(resposta2);
        console.log("A diferença entre eles é " + diferenca);

    }
*/




// Exercícios de Funções

// 1.

/* function numeros() {

    const lista = [99, 7, 10 , 4, 11, 16, 22, 31, 77, 88, 100];
    let maior = lista[0];
    let menor = lista[0];
    let segundoMaior = 0;
    let segundoMenor = 0;


    for (numero of lista) {
        if (numero > maior) {
            segundoMaior = maior;
            maior = numero;
        }
    }

    for (numero2 of lista) {
        if (numero2 < menor) {
            segundoMenor = menor;
            menor = numero2;      
        }
    }

    console.log(lista);
    console.log("Segundo maior número é " + segundoMaior);
    console.log("Segundo menor número é " + segundoMenor);
 }

 console.log(numeros());
*/


// 2.

const mensagem = () => {
    return alert("Hello Labenu !!!");
}

console.log(mensagem());