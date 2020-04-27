// Exercícios de interpretação de código

// Exercício 1.

// bool1=true && bool2=false => false -- false && !bool3=true => 'false'        

// bool2=false || bool1=true => true -- true && !bool3=false => 'false'

// !resultado=true && (bool1=true || bool1=true => true) -- true && true => 'true'

// resultado=true && (!bool1=false || bool2=false => true) -- true && true => true -- true && !bool3=false => 'false'

// typeof exibe o tipo do valor da variável, no caso, resultado = 'boolean'


//                              ------------------------


// Exercício 2.


// a. Arrays são maneiras de se guardar e acessar mais de uma informação ao mesmo tempo. Cada posição do array guarda uma informação.

// b. [0]

// c. Pela quantidade de elementos na declaração do array. Ex: array[1,2,3], array com 3 elementos

/* d. I - undefined
      II - null
      III - 11
      IV - 3 e 4
      V - 19 e 9
      VI - 3
      VII - 1
*/


//                          -----------------------


// Exercícios de escrita de código

// Exercício 1.
const exA = (77 - 32) * (5/9) + 273.15;
console.log(exA);

const exB = (80 * (9/5) + 32);
console.log(exB);

const exC = (30 * (9/5)) + 32;
const exC2 = 30 + 273.15;
console.log(exC + " e " + exC2);

const exD = prompt("Digite um valor para converter de grau Celsius para Fahrenheit e Kelvin");
const cel = (exD * (9/5)) + 32;
const fah = Number(exD) + 273.15;
console.log(cel + " e " + fah);

// Exercício 2.
/*const nome = prompt("Qual seu nome?");
const cidade = prompt("Qual a sua cidade?");
const filme = prompt("Qual seu filme favorito?");
const serie = prompt("Qual a sua série favorita");
const musica = prompt("Qual a sua música favorita?");

console.log(nome);
console.log(cidade);
console.log(filme);
console.log(serie);
console.log(musica);*/

// Exercício 3.
const watt = 0.05 * 280;
console.log(watt);

const des = Number(watt) * 0.15;
const val = Number(watt) - Number(des);
console.log(val);


//                  ------------------------


// Desafio
const exerA = 20 / 2.205;
console.log("20lb equivalem a " + exerA + " kg");

const exerB = 10.5 / 3.527;
console.log("10.5oz equivalem a " + exerB + " kg");

const exerC = 100 * 1609;
console.log("100mi equivalem a " + exerC + " m");

const exerD = 50 / 3.281;
console.log("50ft equivalem a " + exerD + " m");

const exerE = 103.56 * 3.785;
console.log("103.56gal equivalem a " + exerE + " l");

const exerF = (450 * 6) / 25;
console.log("450 xi equivalem a " + exerF + " l");

const val1 = prompt("Digite um valor para converter de milha para metro");
const exerG = Number(val1) * 1609;
console.log("O valor de " + val1 + "mi equivalem a " + exerG + " m");






