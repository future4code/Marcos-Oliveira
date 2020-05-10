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

/* const mensagem = () => {
    return alert("Hello Labenu !!!");
   }

   console.log(mensagem());
*/




// Exercícios de Objetos


/* 1. Os Objetos são estruturas de sintaxe que nos permitem representar dados mais complexos.
      Utilizamos os objetos para facilitar a forma de idealizar os modelos do mundo real, assim  os objetos se tornam mais 
      intuitivos/humanizados.

      O Array armazena mais de uma informação em uma única variável. Utilizamos o Array para criar listas, e as informações 
      serão armazenadas de uma forma ordenada.
*/

// 2. 

/*
function criaRetangulo(lado1, lado2) {

    const objRetangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (lado1 + lado2) * 2,
        area: lado1 * lado2
    }

    return console.log(objRetangulo);
    
}

console.log(criaRetangulo(4, 4));
*/

// 3. 

/*
const filmeFavorito = {
    titulo: 'Vingadores',
    ano: 2012,
    diretor: 'Joss Whedon',
    atores: ['Robert Downey Jr.', 'Mark Ruffalo'],
    atrizes: ['Scarlett Johansson', 'Cobie Smulders']
}

console.log("Venha assistir ao filme " + filmeFavorito.titulo + ", de " + filmeFavorito.ano + ", dirigido por " + 
             filmeFavorito.diretor + " e estrelado por " + filmeFavorito.atores + "," + filmeFavorito.atrizes);
*/

// 4.

/*
const pessoa = {
    nome: 'Ana Rosa',
    idade: 25,
    email: 'anarosa@outlook.com',
    endereco: 'Rua Almeida Silva, nº 188 - Jardins - São Paulo'
}

const anonimizarPessoa = {
    ...pessoa,
    nome: 'ANÔNIMO'
}

console.log(anonimizarPessoa);
console.log(pessoa);
*/




// Exercícios de Funções de array

// 1. 

// a)

/*
const lista = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Artur", idade: 89}
]

const adultos = lista.filter((adulto, index, array) => {
    return adulto.idade >= 20;
}) 

console.log(adultos);
*/


// b.

/*
const criancaEAdolescente = lista.filter((adulto, index, array) => {
    return adulto.idade < 20;
}) 

console.log(criancaEAdolescente);
*/


// 2. 

// a)

/*
const arrayNumeros = [1,2,3,4,5,6];

const numeros = arrayNumeros.map((numero, index, array) => {
    return numero * 2; 
})

console.log(numeros);
*/



// b) 

/*
const arrayNumeros = [1,2,3,4,5,6];

const numeros = arrayNumeros.map((numero, index, array) => {
    return `${numero * 3}`;
})

console.log(numeros);
*/

// c)

/*
const arrayNumeros = [1,2,3,4,5,6];

let numeros = arrayNumeros.map((numero, index, array) => {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
})

console.log(numeros);
*/


// 3. 

// a)

/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permissao = pessoas.filter((permitido, index, array) => {
    return ((permitido.altura >= 1.5) && (permitido.idade > 14) && (permitido.idade < 60));
})

console.log(permissao);
*/


// b)

/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const naoPermitidos = pessoas.filter((permitido, index, array) => {
    return ((permitido.altura < 1.5) || (permitido.idade < 14) || (permitido.idade > 60));     
})

console.log(naoPermitidos);
*/


// 4.

/*
let emails = [];

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

consultas.forEach((email, index, array) => {
    if (email.cancelada === true) {
        emails.push(`Olá Sr./Sra. ${email.nome}. Infelizmente, sua consulta marcada para o dia ${email.dataDaConsulta} 
                     foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la `);
    } else {
        emails.push(`Olá Sr./Sra. ${email.nome}. Estamos enviando esta mensagem para lembrá-lo/lembrá-la da sua consulta 
                     no dia ${email.dataDaConsulta}. Por favor, acuse o recebimento deste email.`);
    }
})

console.log(emails);
*/

// 5.

/*
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((conta, index, array) => {
    for (let valor of conta.compras) {
        conta.saldoTotal -= valor;
    }
})

console.log(contas);
*/
