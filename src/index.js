// Caso não tenha, baixar o pacote "npm i readline-sync"

const prompt = require("readline-sync");

const nomeDoUsuario = prompt.question("Qual é o seu nome? ");

if (nomeDoUsuario) {
  console.log(`Olá ${nomeDoUsuario}, seja bem vindo`);
} else {
  console.log(
    "Parece que você digitou o nome errado. Por favor, tente novamente"
  );
}
