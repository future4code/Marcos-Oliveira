
// JOGO ONDE O USUÁRIO PODE COMPRAR MAIS DE DUAS CARTAS E SE SUA PONTUAÇÃO DO FOR MENOR OU IGUAL A 21,
//O COMPUTADOR TAMBÉM PODERÁ COMPRAR MAIS CARTAS, ATÉ QUE SUA PONTUAÇÃO SEJA MAIOR QUE A DO USUÁRIO OU IGUAL A 21.

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
         carta3 = comprarCarta();                  
         carta4 = comprarCarta();
      }
   }

   let pontUsuario = carta1.valor + carta2.valor;
   let usuarioT = carta1.texto + " " + carta2.texto;
         
   let pontComputador = carta3.valor + carta4.valor;
   let computadorT = carta3.texto + " " + carta4.texto;

   let pergunta = (confirm("Suas cartas são " + usuarioT + ".\n" +  "A carta revelada do computador é " 
                           + carta3.texto + "\n" + "Deseja comprar mais uma carta?"));
   
   for (;((pontUsuario < 21) && (pergunta === true));) {     
      const novaCarta = comprarCarta();                        
      pontUsuario += novaCarta.valor;                         
      usuarioT += " " + novaCarta.texto;
      pergunta = (confirm("Suas cartas são " + usuarioT + ".\n" + "A carta revelada do computador é " 
                          + carta3.texto + "\n" + "Deseja comprar mais uma carta?"));
   }

   if (pontUsuario > 21) {
    alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
          + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
          + pontComputador + "\n" + "O computador ganhou!");
   
   } else if (pergunta === false) { 
      for (;((pontComputador !== 21) && (pontComputador < pontUsuario));) {     
          const novaCartaC = comprarCarta();                        
          pontComputador += novaCartaC.valor;                         
          computadorT += " " + novaCartaC.texto;
      }
   }

   if (pontComputador > 21) {
    alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
          + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
          + pontComputador + "\n" + "O usuário ganhou!");

   } else if ((pontUsuario === 21) && (pontComputador < 21)) {
     alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
            + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
            + pontComputador + "\n" + "O usuário ganhou!");   
            
   } else if ((pontComputador === 21) && (pontUsuario < 21)) {
     alert("Suas cartas são " + usuarioT + ". Sua pontuação é " + pontUsuario + "\n" 
           + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
           + pontComputador + "\n" + "O computador ganhou!");   
                                                                                          
   } else if (pontUsuario === pontComputador) {
     alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
           + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
           + pontComputador + "\n" + "Empatou!");

   } else if (pontUsuario < pontComputador)  {   
     alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
           + "As cartas do computador são " + computadorT + ". A pontuação do computador é " 
           + pontComputador + "\n" + "O computador ganhou");
   }

} else {
   alert("Jogo encerrado");
}
