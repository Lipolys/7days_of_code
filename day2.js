let nome;
let idade;
let linguagem;
let escolha;

nome = prompt("Qual o seu nome?");
idade = prompt("Quantos anos vocẽ tem?");
linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}?!`);

escolha = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (escolha == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (escolha == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}