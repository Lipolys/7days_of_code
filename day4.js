alert("Boas vindas ao jogo do número secreto!");
let margem = 10;
let numeroSecreto = parseInt(Math.random() * margem + 1);
let chute = prompt("Escolha um número entre 1 e 10");
let palavra = " tentativas";
let chuteAcertou = (chute == numeroSecreto);

for (let i = 2; i > 0 && !chuteAcertou; --i) {
    if (!chuteAcertou){
        if (i == 1) {
            palavra = " tentativa";
        }
        alert("Você errou :(\n Mas não se preocupe, você ainda tem " + i + palavra);
        chute = prompt("Escolha um número entre 1 e 10");
        chuteAcertou = chute == numeroSecreto;
    }
}

if (!chuteAcertou) {
    alert(`Não foi dessa vez!
 O número secreto era ${numeroSecreto}`);
}else if (chuteAcertou) {
    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
}

alert("Fim de jogo!");