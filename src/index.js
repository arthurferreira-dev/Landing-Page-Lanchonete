// Caso não tenha, baixar o pacote "npm i readline-sync"

// const prompt = require("readline-sync");

const nome = document.getElementById("bemVindo");

function nomeDoUsuario(bemVindo) {
  if (nome) {
    console.log(`Olá ${nome}`);
  }
}

function carregar() {
  let msg = document.getElementById("timer");
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
