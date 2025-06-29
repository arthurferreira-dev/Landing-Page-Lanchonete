function Name() {
  let welcomeTXT = document.getElementById('bemVindo');
  let nome = prompt("Qual é o seu nome?");
  if (nome == 'Arthur Ferreira' | nome == 'Arthur' | nome == 'Ferreira' | nome == 'arthur ferreira' | nome == 'arthur' | nome == 'ferreira') {
    welcomeTXT.innerHTML = '[EasterEGG] Olá Arthur Ferreira Dev, você mesmo programou isso! [EasterEGG]'
  } else if (nome == 'Jack Bila' | nome == 'Jack' | nome == 'Bila' | nome == 'jack bila' | nome == 'jack' | nome == 'bila') {
    welcomeTXT.innerHTML = '[EasterEGG] Eae JackBila, bom trabalho com o SASS! [EasterEGG]'
  } else if (nome == 'Luis Felipe' | nome == 'Luis' | nome == 'Felipe' | nome == 'luis felipe' | nome == 'Luis' | nome == 'felipe') {
    welcomeTXT.innerHTML = '[EasterEGG] Oi Luis Felipe, belo "index.js"! [EasterEGG]'
  } else if (nome == 'Theo Teixeira Kobel' | nome == 'Theo Teixeira' | nome =='Theo' | nome == 'Kobel' | nome == 'theo teixeira kobel' | nome == 'theo teixeira' | nome =='theo' | nome == 'kobel') {
    welcomeTXT.innerHTML = '[EasterEGG] Eae <strong>TTK</strong>, de boa? [EasterEGG]'
  } else {
    welcomeTXT.innerHTML = `Olá ${nome}, seja bem vindo!`
  }
}


function carregar() {
  let msg = document.getElementById('timer');
  timer.innerHTML = `Agora são ${hora} horas e ${min} minutos !`;
  let h = new Date();
  let m = new Date();
  let hora = h.getHours();
  let min = m.getMinutes();

  timer.innerHTML = `Agora são ${hora} horas e ${min} minutos !`;

  if (hora >= 0 && hora < 12) {
    //Bom dia
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
  } else {
    //Boa noite
  }
}

console.log(carregar);

// const barra = document.getElementsByClassName("navegador");

// const nomeDoUsuario = prompt.question("Qual é o seu nome? ");

// if (nomeDoUsuario) {
//   console.log(`Olá ${nomeDoUsuario}, seja bem vindo`);
// } else {
//   console.log(
//     "Parece que você digitou o nome errado. Por favor, tente novamente"
//   );
// }

// function barraDeNavegador(navegador) {
//   return onclick;
// }
