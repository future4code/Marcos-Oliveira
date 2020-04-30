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


if (confirm("Quer iniciar uma nova rodada?")) {
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();

   if((carta1.texto === "A" && carta2.texto === "A") || (carta3.texto === "A" && carta4.texto === "A")) { // Exercício 8
      carta1 = comprarCarta();
      carta2 = comprarCarta();
      carta3 = comprarCarta();
      carta4 = comprarCarta();
   } else {

      let pontUsuario = carta1.valor + carta2.valor;
      let usuarioT = carta1.texto + " " + carta2.texto + " ";
      
      let pontComputador = carta3.valor + carta4.valor;
      let computadorT = carta3.texto + " " + carta4.texto;

      if (confirm("Suas cartas são " + usuarioT + ". A carta revelada do computador é " 
                  + carta3.valor + "\n" + "Deseja comprar mais uma carta?")) {
         let novaCarta = comprarCarta();
         pontUsuario += novaCarta.valor;
         usuarioT += novaCarta.texto;
         if (pontUsuario > 21) {
            alert("Suas cartas são " + usuarioT + ". Sua pontuação é "+ pontUsuario + "\n" 
                  + "As cartas do computador são " + computadorT + ". A pontuação do computador é " + pontComputador); 
         }


      } else {

      }
         








      if (pontUsuario > pontComputador) {
         console.log("O usuário ganhou!");
      } else if (pontUsuario < pontComputador) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }
   }
 } else {
    console.log("O jogo acabou");
 }
