/*4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Três interruptores; 1000x são as tentativas de descobrir a qual sala pertencem
let contagemInterruptor01 = 10;
let contagemInterruptor02 = 20;
let contagemInterruptor03 = 30;

rl.question('Informe o Interruptor 10, 20, 30: ', (interruptor) => {
  //==============================================================================================================
  // Sala 02
  // Duas variáveis booleanas.
  let ida01 = true;
  let ida02 = true; // Porque com certeza irei verificar.

  // Ou seja, irei tentar ver de qual interruptor pertence a lâmpada da sala.
  if (interruptor === '10') {
    // Só posso ir 2x na sala para tentar identificar o interruptor da lâmpada em questão.
    if (!ida01) {
      // Significa que fui à sala, mas não consegui identificar o interruptor da lâmpada da sala específica.
      // Faça alguma ação aqui.
    }

    if (ida02) {
      // Significa que fui e perdi a minha tentativa.
      // Faça alguma ação aqui.
    }

    // Você já fez suas 2 tentativas e já perdeu a identificação de 1 interruptor.
  }

  if (!ida01) {
    console.log('Perdi minha Tentativa');
  }

  if (ida02 && contagemInterruptor01 === 10) {
    console.log('Interruptor 01 da Sala 2');
  }
  //==============================================================================================================
  // Sala 01
  if (!ida01) {
    console.log('Perdi minha Tentativa');
  }

  if (ida02 && contagemInterruptor02 === 20) {
    // Faça alguma ação aqui.
  }

  rl.close();
});

/*
Em texto:
Assumindo que seja verdade:
3 lâmpadas totais, 1 por sala.

2 idas para salas, considerando volta tbm.

Primeiro passo:
Gastar a primeira ida para até a primeira sala, voltar para a sala inicial, mantendo a porta aberta

Segundo passo:
Gastar a segunda ida indo para a segunda sala, voltando para a sala inicial e mantendo a porta aberta

Terceiro:
Na sala com os interruptores, ligar um por um e ver qual dos interruptores ligará a luz de qual sala, descobrindo das duas salas que entrei, sobrará apenas um interruptor, da última sala.
 */