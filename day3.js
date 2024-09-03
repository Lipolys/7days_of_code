let nome;
let escolha1;
nome = prompt("Qual o seu nome?");

escolha1 = prompt(`${nome}, você deseja seguir para a área de Front-end ou seguir para a área de Back-end?`);

let escolha2;
if (escolha1 == "Front-end") {
    escolha2 = prompt("Você quer aprender React ou Angular?");
} else if (escolha1 == "Back-end") {
    escolha2 = prompt("Você quer aprender C# ou Java?");
}

let escolha3;
if (escolha1 == "Front-end") {
    escolha3 = prompt("Você quer continuar se especializando em Front-end ou quer se tornar Fullstack? [digite Front-end ou Fullstack]");
} else if (escolha1 == "Back-end") {
    escolha3 = prompt("Você quer continuar se especializando em Back-end ou quer se tornar Fullstack? [digite Back-end ou Fullstack]");
}

let mensagem;
if (escolha3 == "Front-end" || escolha3 == "Back-end") {
    mensagem = `e continuar se especializando em ${escolha3}`;
} else if (escolha3 == "Fullstack") {
    mensagem = `e depois se tornar ${escolha3}`;
}
alert(`Que legal! Você quer se tornar ${escolha1}, aprender ${escolha2} ${mensagem}`);


let linguagens = [escolha2];

linguagens.push(prompt(`Você já disse que gosta de ${linguagens}, quer mais alguma?`));
while (linguagens[linguagens.length - 1]  != null){
    linguagens.push(prompt(`Você já disse que gosta de ${linguagens}, quer mais alguma?`));
}

alert(`Que legal, ${nome}! Você quer aprender ${linguagens}. Continue estudando muito!`)
