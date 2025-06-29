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