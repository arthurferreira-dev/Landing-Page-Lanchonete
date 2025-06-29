document.addEventListener("DOMContentLoaded", function () {
  let nome;
  do {
    nome = prompt("Por favor, digite seu nome:");
  } while (nome === null || nome.trim() === "");

  let welcomeMessageElement = document.getElementById("bem-vindo");

  welcomeMessageElement.textContent = `Olá ${nome}, seja bem vindo!`;
});
function Name() {
  let welcomeTXT = document.getElementById("bemVindo");
  let nome = prompt("Qual é o seu nome?");
  if (
    (nome == "Arthur Ferreira") |
    (nome == "Arthur") |
    (nome == "Ferreira") |
    (nome == "arthur ferreira") |
    (nome == "arthur") |
    (nome == "ferreira")
  ) {
    welcomeTXT.innerHTML =
      "[EasterEGG] Olá Arthur Ferreira Dev, você mesmo programou isso! [EasterEGG]";
  } else if (
    (nome == "Jack Bila") |
    (nome == "Jack") |
    (nome == "Bila") |
    (nome == "jack bila") |
    (nome == "jack") |
    (nome == "bila")
  ) {
    welcomeTXT.innerHTML =
      "[EasterEGG] Eae JackBila, bom trabalho com o SASS! [EasterEGG]";
  } else if (
    (nome == "Luis Felipe") |
    (nome == "Luis") |
    (nome == "Felipe") |
    (nome == "luis felipe") |
    (nome == "Luis") |
    (nome == "felipe")
  ) {
    welcomeTXT.innerHTML =
      '[EasterEGG] Oi Luis Felipe, belo "index.js"! [EasterEGG]';
  } else if (
    (nome == "Theo Teixeira Kobel") |
    (nome == "Theo Teixeira") |
    (nome == "Theo") |
    (nome == "Kobel") |
    (nome == "theo teixeira kobel") |
    (nome == "theo teixeira") |
    (nome == "theo") |
    (nome == "kobel")
  ) {
    welcomeTXT.innerHTML =
      "[EasterEGG] Eae <strong>TTK</strong>, de boa? [EasterEGG]";
  } else {
    welcomeTXT.innerHTML = `Olá ${nome}, seja bem vindo!`;
  }
}

function carregar() {
  let timerElement = document.getElementById("timer"); // Renomeei a variável para evitar conflito

  // Obtém a data e hora atuais
  let dataAtual = new Date();
  let hora = dataAtual.getHours();
  let min = dataAtual.getMinutes();

  // Formata os minutos para ter sempre dois dígitos (ex: 05 em vez de 5)
  let minFormatado = min < 10 ? `0${min}` : min;

  // Atualiza o conteúdo do elemento timer
  timerElement.innerHTML = `Agora são ${hora} horas e ${minFormatado} minutos !`;

  if (hora >= 0 && hora < 12) {
    console.log("Bom dia");
  } else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde");
  } else {
    console.log("Boa noite");
  }

  setTimeout(carregar, 60000);
}
