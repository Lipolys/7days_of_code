let frutas = [];
let laticinios = [];
let congelados = [];
let  doces = [];
let adicionar = false;
adicionarProduto();

while (adicionar) {
    let produto = prompt("Qual o nome da comida?");
    categoria = prompt("Qual é a categoria do produto? [responda: Frutas, Laticinios, Congelados ou Doces]");
    switch (categoria) {
        case "Frutas": frutas.push(produto); break;
        case "Laticinios": laticinios.push(produto); break;
        case "Congelados": congelados.push(produto); break;
        case "Doces": doces.push(doces); break;
        }
    adicionarProduto();
}

alert(`Sua lista de compras:
Frutas: ${frutas}
Laticinios: ${laticinios}
Congelados: ${congelados}
Doces: ${doces}`);

function adicionarProduto() {
    let respostaAdicionar = prompt("Deseja adicionar alguma comida na sua lista de compras? [Sim ou Não]");
    adicionar = respostaAdicionar === "Sim";
}