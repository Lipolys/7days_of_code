let frutas = [];
let laticinios = [];
let congelados = [];
let  doces = [];
let comida;
let adicionar = false;
let remover = false;
adicionarProduto();

while (adicionar) {
    comida = prompt("Qual o nome da comida?");
    categoria = prompt("Qual é a categoria do produto? [responda: Frutas, Laticinios, Congelados ou Doces]");
    switch (categoria) {
        case "Frutas": frutas.push(comida); break;
        case "Laticinios": laticinios.push(comida); break;
        case "Congelados": congelados.push(comida); break;
        case "Doces": doces.push(comida); break;
    }
    removerProduto()
    if (remover) {
        mostrarLista();
        comida = prompt("Qual o nome da comida?");
        categoria = prompt("Qual é a categoria do produto? [responda: Frutas, Laticinios, Congelados ou Doces]");
        switch (categoria) {
            case "Frutas":
                if (frutas.includes(comida)) {
                    frutas.splice(frutas.indexOf(comida), 1)
                }
                break;
            case "Laticinios":
                if (laticinios.includes(comida)) {
                    laticinios.splice(laticinios.indexOf(comida), 1)
                }
                break;
            case "Congelados":
                if (congelados.includes(comida)) {
                    congelados.splice(congelados.indexOf(comida), 1)
                }
                break;
            case "Doces":
                if (doces.includes(comida)) {
                    doces.splice(doces.indexOf(comida), 1)
                }
                break;
            default: alert("Comida não encontrada na lista"); break;
        }
        mostrarLista();
    }
    adicionarProduto();
}

mostrarLista();

function mostrarLista() {
    alert(`Sua lista de compras:
    Frutas: ${frutas}
    Laticinios: ${laticinios}
    Congelados: ${congelados}
    Doces: ${doces}`);
}

function adicionarProduto() {
    let respostaAdicionar = prompt("Deseja adicionar alguma comida na sua lista de compras? [Sim ou Não]");
    adicionar = respostaAdicionar === "Sim";
}

function removerProduto() {
    let respostaRemover = prompt("Deseja remover alguma comida na sua lista de compras? [Sim ou Não]");
    remover = respostaRemover === "Sim";
}