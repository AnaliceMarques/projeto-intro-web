console.log(`Módulo 1 - Projeto de Introdução à Web`);
console.log("\n");

//Semana 1

//Item escolhido: Produtos de Supermercado
/*
let categoria; //String
let nomeDoProduto; //String
let embalagemDoProduto; //String
let marcaDoProduto; //String
let precoDoProduto; //Number
let desconto; //Boolean
let produtosComplementares; //Array de String
*/
//Produto 1
const categoria1 = "Arroz";
const nomeDoProduto1 = "Arroz Parbolizado";
const embalagemDoProduto1 = "1 kg";
const marcaDoProduto1 = "Urbano";
const precoDoProduto1 = 7.0;
const desconto1 = false;
const produtosComplementares1 = ["Feijão", "Macarrão", "Farinha"];

//Produto 2
const categoria2 = "Detergente";
const nomeDoProduto2 = "Detergente Líquido Neutro";
const embalagemDoProduto2 = "500 ml";
const marcaDoProduto2 = "Ypê";
const precoDoProduto2 = 3.0;
const desconto2 = false;
const produtosComplementares2 = ["Sabão em barra", "Sabão em pó", "Esponja"];

//Produto 3
const categoria3 = "Leite Condensado";
const nomeDoProduto3 = "Leite Condensado Integral Moça";
const embalagemDoProduto3 = "395 g";
const marcaDoProduto3 = "Nestle";
const precoDoProduto3 = 5.0;
const desconto3 = true;
const produtosComplementares3 = ["Chocolate", "Açúcar", "Granulado"];

//Relatório dos Produtos
console.log("Relatório dos Produtos - Semana 1");

//Produto 1
console.log(`${categoria1.toUpperCase()}
Nome: ${nomeDoProduto1}
Embalagem: ${embalagemDoProduto1}
Marca: ${marcaDoProduto1}
Preço: ${precoDoProduto1.toFixed(2)}
O preço está com desconto? ${desconto1}
Produtos complementares: ${produtosComplementares1}
`);
console.log("-----------------------");

//Produto 2
console.log(`${categoria2.toUpperCase()}
Nome: ${nomeDoProduto2}
Embalagem: ${embalagemDoProduto2}
Marca: ${marcaDoProduto2}
Preço: ${precoDoProduto2.toFixed(2)}
O preço está com desconto? ${desconto2}
Produtos complementares: ${produtosComplementares2}
`);
console.log("-----------------------");

//Produto 3
console.log(`${categoria3.toUpperCase()}
Nome: ${nomeDoProduto3}
Embalagem: ${embalagemDoProduto3}
Marca: ${marcaDoProduto3}
Preço: ${precoDoProduto3.toFixed(2)}
O preço está com desconto? ${desconto3}
Produtos complementares: ${produtosComplementares3}
`);
console.log("-----------------------");
console.log("\n");

//Média dos valores dos produtos
const media = (precoDoProduto1 + precoDoProduto2 + precoDoProduto3) / 3;
console.log(`A média do preço dos produtos é R$${media}`);
console.log("\n");

//Verificação se todos os produtos estão com desconto
const verificaDesconto = desconto1 && desconto2 && desconto3;
console.log(`Todos os produtos estão com desconto? ${verificaDesconto}`);
console.log("\n");

//Semana 2

//Transformando os produtos em objetos
//Produto 1 (objeto)
const produto1 = {
  categoria: "Arroz",
  nome: "Arroz Parbolizado",
  embalagem: "1 kg",
  marca: "Urbano",
  preco: 7.0,
  desconto: false,
  produtosComplementares: ["Feijão", "Macarrão", "Farinha"],
};

//Produto 2 (objeto)
const produto2 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 3.0,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
};

//Produto 3 (objeto)
const produto3 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Integral Moça",
  embalagem: "395 g",
  marca: "Nestle",
  preco: 5.0,
  desconto: true,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
};

let listaDeProdutos = [];

listaDeProdutos.push(produto1, produto2, produto3);

console.log("Array dos produtos no formato de objeto - Semana 2");
console.log(listaDeProdutos);
console.log("\n");

//Da lista dos produtos selecionados, pegar apenas os que esão com desconto.

let listaDeProdutosComDesconto = [];

//Não precisa colocar === true, porque só vai entrar no if se a condição for true, caso seja falso vai entrar no else.

if (listaDeProdutos[0].desconto) {
  listaDeProdutosComDesconto.push(listaDeProdutos[0]);
} else {
  // alert(`O produto (${listaDeProdutos[0].nome}) está sem desconto.`);
  console.log(
    `O produto ${listaDeProdutos[0].nome} da marca ${listaDeProdutos[0].marca} está sem desconto.`
  );
  console.log("\n");
}

if (listaDeProdutos[1].desconto) {
  listaDeProdutosComDesconto.push(listaDeProdutos[1]);
} else {
  // alert(`O produto (${listaDeProdutos[1].nome}) está sem desconto.`);
  console.log(
    `O produto ${listaDeProdutos[1].nome} da marca ${listaDeProdutos[1].marca} está sem desconto.`
  );
  console.log("\n");
}

if (listaDeProdutos[2].desconto) {
  listaDeProdutosComDesconto.push(listaDeProdutos[2]);
} else {
  // alert(`O produto (${listaDeProdutos[2].nome}) está sem desconto.`);
  console.log(
    `O produto ${listaDeProdutos[2].nome} da marca ${listaDeProdutos[2].marca} está sem desconto.`
  );
  console.log("\n");
}

/*
//Verificação
console.log("Produtos com desconto");
console.log("\n");
console.log(listaDeProdutosComDesconto);
*/

//Semana 3

//Relatório de todos os produtos da lista, utilizando laço e deixando em uma mesma string
console.log("Relatório dos produtos (utilizando for) - Semana 3");
for (let i = 0; i < listaDeProdutos.length; i++) {
  console.log(`
  ${listaDeProdutos[i].categoria.toUpperCase()}
  Nome: ${listaDeProdutos[i].nome}
  Embalagem: ${listaDeProdutos[i].embalagem}
  Marca: ${listaDeProdutos[i].marca}
  Preço: ${listaDeProdutos[i].preco.toFixed(2)}
  O preço está com desconto? ${listaDeProdutos[i].desconto}
  Produtos complementares: ${listaDeProdutos[i].produtosComplementares.join(
    ", "
  )}
 `);
  console.log("-----------------------");
}

//Relatório de todos os produtos da lista, utilizando laço for...in e for...of
console.log(
  "Relatório dos produtos (utilizando for..of e for...in) - Semana 3"
);

for (let produto of listaDeProdutos) {
  for (let info in produto) {
    console.log(`${info}: ${produto[info]}`);
  }
  console.log("-----------------------");
}
//for...of acessa o objeto direto na lista e o for...in vai através das chaves do objeto

//Função para retornar o Relatório do Produto quando o parâmetro da função é um objeto
function relatorio(produto) {
  let relatorioDoProduto = "";
  for (let info in produto) {
    relatorioDoProduto += `${info}: ${produto[info]}\n`;
  }
  return relatorioDoProduto;
}

/*
  //Verificação da função relatorio
  console.log(relatorio(listaDeProdutos[0]));
  console.log(`\n`);
  console.log(relatorio(listaDeProdutos[1]));
  console.log(`\n`);
  console.log(relatorio(listaDeProdutos[2]));
  console.log(`\n`);
  */

//Função para verificar se um produto está dentro de uma lista, quando o parâmetro da função é uma lista e uma string. Imprimi o objeto e retorna a lista
function verificaProdutosNaLista(lista, nomeDoProduto) {
  let produtosEncontrado = [];

  for (let produto of lista) {
    if (produto.nome.toUpperCase().includes(nomeDoProduto.toUpperCase())) {
      produtosEncontrado.push(produto);
    } else if (
      produto.nome.toUpperCase().includes(nomeDoProduto) !==
      nomeDoProduto.toUpperCase()
    ) {
      produtosEncontrado = produtosEncontrado;
    }
  }

  if (produtosEncontrado.length === 0) {
    alert("O produto desejado não foi encontrado");
  } else {
    console.log(
      `Encontramos ${produtosEncontrado.length} ${
        produtosEncontrado.length === 1 ? "resultado" : "resultados"
      } para "${nomeDoProduto}":`
    );
    for (prod of produtosEncontrado) {
      console.log(prod);
    }
  }
  return produtosEncontrado;
}

/*
//Verificação da função verificaProdutosNaLista
verificaProdutosNaLista(listaDeProdutos, "arroz");
verificaProdutosNaLista(listaDeProdutos, "feijão");

console.log(verificaProdutosNaLista(listaDeProdutos, "arroz");)
console.log(verificaProdutosNaLista(listaDeProdutos, "feijão");)
*/

//Semana 6

console.log("Manipulação com DOM - Semana 6");

//Produtos disponíveis
//Arroz
const arroz1 = {
  categoria: "Arroz",
  nome: "Arroz Parbolizado",
  embalagem: "1 kg",
  marca: "Urbano",
  preco: 6.59,
  desconto: true,
  produtosComplementares: ["Feijão", "Macarrão", "Farinha"],
  imagem: "./img/Arroz-Parbolizado-Urbano-1kg.png",
  link: "https://pt.wikipedia.org/wiki/Arroz",
};

const arroz2 = {
  categoria: "Arroz",
  nome: "Arroz Integral",
  embalagem: "1 kg",
  marca: "Urbano",
  preco: 9.49,
  desconto: false,
  produtosComplementares: ["Feijão", "Macarrão", "Farinha"],
  imagem: "./img/Arroz-Integral-Urbano-1kg.png",
  link: "https://pt.wikipedia.org/wiki/Arroz",
};

//Detergente
const detergente1 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 1.99,
  desconto: true,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Neutro-Ype-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

const detergente2 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Brilux",
  preco: 2.79,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Neutro-Brilux-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

const detergente3 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Limão",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 2.99,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Limao-Ype-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

const detergente4 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Limão",
  embalagem: "500 ml",
  marca: "Brilux",
  preco: 2.79,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Limao-Brilux-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

const detergente5 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Coco",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 2.99,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Coco-Ype-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

const detergente6 = {
  categoria: "Detergente",
  nome: "Detergente Líquido Coco",
  embalagem: "500 ml",
  marca: "Brilux",
  preco: 2.79,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
  imagem: "./img/Detergente-Coco-Brilux-500ml.png",
  link: "https://pt.wikipedia.org/wiki/Detergente",
};

//Leite Condensado
const leiteCondensado1 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Integral Moça",
  embalagem: "395 g",
  marca: "Nestle",
  preco: 6.89,
  desconto: true,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
  imagem: "./img/Leite-Condensado-Integral-Moca-Nestle-395g.png",
  link: "https://pt.wikipedia.org/wiki/Leite_condensado",
};

const leiteCondensado2 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Integral Camponesa",
  embalagem: "395 g",
  marca: "Embaré",
  preco: 8.99,
  desconto: false,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
  imagem: "./img/Leite-Condensado-Integral-Camponesa-Embare-395g.png",
  link: "https://pt.wikipedia.org/wiki/Leite_condensado",
};

const leiteCondensado3 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Semidesnatado Camponesa",
  embalagem: "395 g",
  marca: "Embaré",
  preco: 7.39,
  desconto: false,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
  imagem: "./img/Leite-Condensado-Semidesnatado-Camponesa-Embare-395g.png",
  link: "https://pt.wikipedia.org/wiki/Leite_condensado",
};

const leiteCondensado4 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Integral Camponesa",
  embalagem: "270 g",
  marca: "Embaré",
  preco: 6.5,
  desconto: false,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
  imagem: "./img/Leite-Condensado-Integral-Camponesa-Embare-270g.png",
  link: "https://pt.wikipedia.org/wiki/Leite_condensado",
};

const leiteCondensado5 = {
  categoria: "Leite Condensado",
  nome: "Leite Condensado Zero Lactose",
  embalagem: "395 g",
  marca: "Piracanjuba",
  preco: 8.19,
  desconto: false,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
  imagem: "./img/Leite-Condensado-Zero-Lactose-Piracanjuba-395g.png",
  link: "https://pt.wikipedia.org/wiki/Leite_condensado",
};

//Leite UHT
const leiteUht1 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Integral Camponesa",
  embalagem: "1 l",
  marca: "Embaré",
  preco: 6.49,
  desconto: true,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Integral-Camponesa-Embare-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const leiteUht2 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Integral",
  embalagem: "1 l",
  marca: "Piracanjuba",
  preco: 7.19,
  desconto: false,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Integral-Piracanjuba-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const leiteUht3 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Semiesnatado Camponesa",
  embalagem: "1 l",
  marca: "Embaré",
  preco: 7.39,
  desconto: false,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Semidesnatado-Camponesa-Embare-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const leiteUht4 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Semidesnatado",
  embalagem: "1 l",
  marca: "Piracanjuba",
  preco: 6.99,
  desconto: false,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Semidesnatado-Piracanjuba-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const leiteUht5 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Desnatado Camponesa",
  embalagem: "1 l",
  marca: "Embaré",
  preco: 7.29,
  desconto: false,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Desnatado-Camponesa-Embare-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const leiteUht6 = {
  categoria: "Leite UHT",
  nome: "Leite UHT Desnatado",
  embalagem: "1 l",
  marca: "Piracanjuba",
  preco: 6.99,
  desconto: false,
  produtosComplementares: ["Leite em pó", "Creme de leite", "Achocolatado"],
  imagem: "./img/Leite-Desnatado-Piracanjuba-1l.png",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

//Manteiga
const manteiga1 = {
  categoria: "Manteiga",
  nome: "Manteiga com Sal Camponesa",
  embalagem: "500 g",
  marca: "Embaré",
  preco: 31.98,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Com-Sal-Camponesa-Embare-500g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

const manteiga2 = {
  categoria: "Manteiga",
  nome: "Manteiga com Sal",
  embalagem: "500 g",
  marca: "Piracanjuba",
  preco: 32.39,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Com-Sal-Pirancajuba-500g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};
const manteiga3 = {
  categoria: "Manteiga",
  nome: "Manteiga sem Sal Camponesa",
  embalagem: "500 g",
  marca: "Embaré",
  preco: 32.19,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Sem-Sal-Camponesa-Embare-500g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

const manteiga4 = {
  categoria: "Manteiga",
  nome: "Manteiga sem Sal",
  embalagem: "500 g",
  marca: "Piracanjuba",
  preco: 34.39,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Sem-Sal-Piracanjuba-500g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

const manteiga5 = {
  categoria: "Manteiga",
  nome: "Manteiga com Sal Camponesa",
  embalagem: "200 g",
  marca: "Embaré",
  preco: 14.99,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Com-Sal-Camponesa-Embare-200g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

const manteiga6 = {
  categoria: "Manteiga",
  nome: "Manteiga com Sal",
  embalagem: "200 g",
  marca: "Piracanjuba",
  preco: 10.99,
  desconto: true,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Com-Sal-Piracanjuba-200g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};
const manteiga7 = {
  categoria: "Manteiga",
  nome: "Manteiga sem Sal Camponesa",
  embalagem: "200 g",
  marca: "Embaré",
  preco: 15.69,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Sem-Sal-Camponesa-Embare-200g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

const manteiga8 = {
  categoria: "Manteiga",
  nome: "Manteiga sem Sal",
  embalagem: "200 g",
  marca: "Piracanjuba",
  preco: 16.5,
  desconto: false,
  produtosComplementares: ["Margarina", "Óleo", "Leite"],
  imagem: "./img/Manteiga-Sem-Sal-Piracanjuba-200g.png",
  link: "https://pt.wikipedia.org/wiki/Manteiga",
};

//Lista com todos os produtos disponíveis no estoque
const produtosDisponiveis = [
  arroz1,
  arroz2,
  detergente1,
  detergente2,
  detergente3,
  detergente4,
  detergente5,
  detergente6,
  leiteCondensado1,
  leiteCondensado2,
  leiteCondensado3,
  leiteCondensado4,
  leiteCondensado5,
  leiteUht1,
  leiteUht2,
  leiteUht3,
  leiteUht4,
  leiteUht5,
  leiteUht6,
  manteiga1,
  manteiga2,
  manteiga3,
  manteiga4,
  manteiga5,
  manteiga6,
  manteiga7,
  manteiga8,
];

console.log("Produtos disponíveis no estoque: ");
console.log(produtosDisponiveis);
console.log(`\n`);

//Função para calcular a média dos preços
const calcMedia = (lista) => {
  let soma = 0;
  for (let i in lista) {
    soma += lista[i].preco;
  }
  let med = soma / lista.length;
  return med;
};

//Função para verificar os produtos que estão com desconto
const verificaOfertas = (lista) => {
  const ofertas = [];
  for (let item of lista) {
    if (item.desconto) {
      ofertas.push(item);
    }
  }
  return ofertas;
};

console.log(`Lista de produtos com desconto:`);
console.log(verificaOfertas(produtosDisponiveis));
console.log(`\n`);

//Lista com os produtos mais pesquisados pelos usuários
const produtosMaisPesquisados = [leiteCondensado1, detergente1, arroz1];

//Manipulação com o DOM
const lista = document.querySelector(".lista-de-produtos");

const inputPesquisa = document.getElementById("produto");

let titulo = document.createElement("h4");
titulo.setAttribute("class", "titulo");
lista.insertAdjacentElement("beforebegin", titulo);

let quantidadeResultados = document.createElement("h5");
quantidadeResultados.setAttribute("class", "info");
lista.insertAdjacentElement("beforebegin", quantidadeResultados);

//Home
titulo.innerHTML = "Confira as Ofertas da Semana";
quantidadeResultados.innerHTML = "";
adicionarLista(verificaOfertas(produtosDisponiveis));

//Função para voltar a tela inicial com o click do ícone Home
function home() {
  lista.innerHTML = "";
  titulo.innerHTML = "Confira as Ofertas da Semana";
  quantidadeResultados.innerHTML = "";
  adicionarLista(verificaOfertas(produtosDisponiveis));
}

// A pesquisa pode ser realizada quando o botão for clicado ou quando a tecla Enter for pressionada. O evento para o botão está no html como onclick.

//Evento para acionar a pesquisa utilizando a tecla Enter
document
  .getElementById("produto")
  .addEventListener("keypress", function (elemento) {
    if (elemento.key === "Enter") {
      verificaProduto();
    }
  });

//Função para encontrar o produto
const verificaProduto = () => {
  lista.innerHTML = "";
  let listaComProdutosDesejados = [];

  if (inputPesquisa.value == "") {
    alert("Digite alguma coisa para que a pesquisa seja realizada");

    titulo.innerHTML = "Produtos mais pesquisados";
    adicionarLista(produtosMaisPesquisados);
    quantidadeResultados.innerHTML = "";
  } else {
    listaComProdutosDesejados = verificaProdutosNaLista(
      produtosDisponiveis,
      inputPesquisa.value.toUpperCase()
    );

    if (listaComProdutosDesejados.length !== 0) {
      titulo.innerHTML = `Resultados encontrados para "${inputPesquisa.value}"`;
      quantidadeResultados.innerHTML = `Produtos encontrados: ${listaComProdutosDesejados.length}`;
      adicionarLista(listaComProdutosDesejados);
      console.log(
        `A média de preço dos produtos encontrados é R$ ${calcMedia(
          listaComProdutosDesejados
        ).toFixed(2)}`
      );
      console.log(
        `Produtos encontrados com desconto: ${
          verificaOfertas(listaComProdutosDesejados).length
        }`
      );
      if (verificaOfertas(listaComProdutosDesejados).length !== 0) {
        console.log(verificaOfertas(listaComProdutosDesejados));
      }
    } else {
      titulo.innerHTML = `Não foram encontrados resultados para "${inputPesquisa.value}"`;
      quantidadeResultados.innerHTML = "";
    }
  }

  inputPesquisa.value = "";

  return listaComProdutosDesejados;
};

//Função para mostrar os itens no html
function adicionarLista(listaDesejada) {
  for (let i = 0; i < listaDesejada.length; i++) {
    //Criando a section para cada produto
    const containerSection = document.createElement("section");
    containerSection.setAttribute("class", "produto");
    //Criando o container da imagem na section
    const containerImagem = document.createElement("div");
    containerImagem.setAttribute("class", "imagem");
    //Inserindo a imagem
    containerImagem.innerHTML = `<img
      src=${listaDesejada[i].imagem} alt="Imagem do produto (${listaDesejada[i].nome} da marca ${listaDesejada[i].marca} na embalagem de ${listaDesejada[i].embalagem})"
      height="120"
    />`;
    containerSection.appendChild(containerImagem);

    //Inserindo a lista não ordenada na section
    const listaNaoOrdenada = document.createElement("ul");
    listaNaoOrdenada.innerHTML = `<li>
      <a
        href=${listaDesejada[i].link}
        target="_blank" class="link"
        >${listaDesejada[i].categoria}</a
      >
    </li>
    <li><strong>Nome:</strong> ${listaDesejada[i].nome}</li>
    <li><strong>Embalagem:</strong> ${listaDesejada[i].embalagem}</li>
    <li><strong>Marca:</strong> ${listaDesejada[i].marca}</li>
    <li><strong>Preço:</strong> R$ ${listaDesejada[i].preco.toFixed(2)}</li>
    <li><strong>Desconto:</strong> ${
      listaDesejada[i].desconto ? "Sim" : "Não"
    }</li>
    <li>
      <strong>Produtos Complementares:</strong> ${listaDesejada[
        i
      ].produtosComplementares.join(", ")}
    </li>`;

    containerSection.appendChild(listaNaoOrdenada);

    //Inserindo a section na Lista
    lista.appendChild(containerSection);
  }
}
