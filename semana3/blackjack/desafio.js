/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 // JOGO ONDE O USUÁRIO PODE COMPRAR MAIS DE DUAS CARTAS, E O COMPUTADOR JOGA COM APENAS DUAS.

 

let pontUsuario;
let pontComputador;
let usuarioT = " ";
let computadorT = " ";

if (confirm("Bem vindo ao jogo Blackjack !!!" +  "\n" + "Deseja iniciar uma rodada?")) {
   
   let carta1 = comprarCarta();
   let carta2 = comprarCarta();
   let carta3 = comprarCarta();
   let carta4 = comprarCarta();

   if((carta1.numero === "A" && carta2.numero === "A") || (carta3.numero === "A" && carta4.numero === "A")) {    
      
      for(;(carta1.numero !== "A" || carta2.numero !== "A") && (carta3.numero !== "A" || carta4.numero !== "A");) {
         carta1 = comprarCarta();
         carta2 = comprarCarta();
         carta3 = comprarCarta();           // Se as duas cartas sorteadas forem "A", um novo sorteio é feito          
         carta4 = comprarCarta();
      }
   }

   let pontUsuario = carta1.valor + carta2.valor;
   let usuarioT = carta1.texto + " " + carta2.texto;
         
   let pontComputador = carta3.valor + carta4.valor;
   let computadorT = carta3.texto + " " + carta4.texto;

   let pergunta = (confirm("Suas cartas são " + usuarioT + ". A carta revelada do computador é " 
                           + carta3.texto + "\n" + "Deseja comprar mais uma carta?"));

   for (;((pontUsuario < 21) && (pergunta === true));) {       // Se o usuário quiser comprar mais cartas, irá entrar
      const novaCarta = comprarCarta();                        //no 'for', e se a pontuação do usuário for menor que 21 
      pontUsuario += novaCarta.valor;                          //ou não quiser comprar mais cartas, sairá do loop.
      usuarioT += " " + novaCarta.texto;
      pergunta = (confirm("Suas cartas são " + usuarioT + ". A carta revelada do computador é " 
                          + carta3.texto + "\n" + "Deseja comprar mais uma carta?"));
   }

   if (pontUsuario > 21) {
      alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
            + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
            + pontComputador + "\n" + "O computador ganhou!");

   } else if ((pontUsuario === 21) && (pontComputador < 21)) {
      alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
            + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
            + pontComputador + "\n" + "O usuário ganhou!");                                     // É feito a comparação das pontuações para exibir a mensagem 
                                                                                                //de quem venceu (usuário ou computador) ou se deu empate
   } else if (pontUsuario === pontComputador) {
      alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
               + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
               + pontComputador + "\n" + "Empatou!");

   } else if (pontUsuario > pontComputador) {   
      alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
            + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
            + pontComputador + "\n" + "O usuário ganhou");

   } else if (pontUsuario < pontComputador) {   
      alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
            + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
            + pontComputador + "\n" + "O computador ganhou");
   }   

} else {
   alert("Jogo encerrado");
}

