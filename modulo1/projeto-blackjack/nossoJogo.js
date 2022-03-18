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

    console.log('Boas vindas ao jogo de Blackjack!')

  let bj1 = confirm('Quer iniciar uma nova rodada?')

   if (bj1){
            let usuario = comprarCarta()
            let computador = comprarCarta()
            let usuario2 = comprarCarta()
            let computador2 = comprarCarta()
           
            let pontosUsuario = usuario.valor + usuario2.valor
            let pontosComputador = computador.valor + computador2.valor 

               console.log (`Usuario - cartas: ${usuario.texto} ${usuario2.texto} - pontos: ${pontosUsuario} `)
               console.log (`Computador - cartas: ${computador.texto} ${computador2.texto} - pontos: ${pontosComputador}`)

               if (pontosUsuario > pontosComputador){
                  console.log('Você ganhou!')
               } else if (pontosComputador > pontosUsuario){
                  console.log('O computador ganhou!')
               }else if (pontosUsuario === pontosComputador){
                  console.log('Empate')
               } else {
                  console.log('O jogo acabou!')
               }
            }