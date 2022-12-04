//Produto 1 (objeto)
const produto1 = {
  nome: "Arroz Parbolizado Tipo 1",
  embalagem: "1 kg",
  marca: "Urbano",
  preco: 7.0,
  desconto: false,
  produtosComplementares: ["Feijão", "Macarrão", "Farinha"],
};

//Produto 2 (objeto)
const produto2 = {
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 3.0,
  desconto: false,
  produtosComplementares: ["Sabão em barra", "Sabão em pó", "Esponja"],
};

//Produto 3 (objeto)
const produto3 = {
  nome: "Leite Condensado Integral",
  embalagem: "395 g",
  marca: "Nestle",
  preco: 5.0,
  desconto: true,
  produtosComplementares: ["Chocolate", "Açúcar", "Granulado"],
};

let produtosSelecionados = [];

produtosSelecionados.push(produto1, produto2, produto3);

console.log(produtosSelecionados);

//Da lista dos produtos selecionados, pegar apenas os que esão com desconto.

let produtosSelecionadosDesconto = [];

//Não precisa colocar === true, porque só vai entrar no if se a condição for true, caso seja falso vai entrar no else.

if (produtosSelecionados[0].desconto) {
  produtosSelecionadosDesconto.push(produtosSelecionados[0]);
} else {
  alert(
    `O preço do produto selecionado (${produtosSelecionados[0].nome}) está sem desconto.`
  );
}

if (produtosSelecionados[1].desconto) {
  produtosSelecionadosDesconto.push(produtosSelecionados[1]);
} else {
  alert(
    `O preço do produto selecionado (${produtosSelecionados[1].nome}) está sem desconto.`
  );
}

if (produtosSelecionados[2].desconto) {
  produtosSelecionadosDesconto.push(produtosSelecionados[2]);
} else {
  alert(
    `O preço do produto selecionado (${produtosSelecionados[2].nome}) está sem desconto.`
  );
}

console.log(produtosSelecionadosDesconto);
