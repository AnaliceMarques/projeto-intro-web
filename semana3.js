//Produto 1 (objeto)
const produto1 = {
  categoria: "arroz",
  nome: "Arroz Parbolizado Tipo 1",
  embalagem: "1 kg",
  marca: "Urbano",
  preco: 7.0,
  desconto: false,
  produtosComplementares: ["feijão", "macarrão", "farinha"],
  imagem: "./media/Arroz-Parbolizado-Tipo1-Urbano.png",
};

//Produto 2 (objeto)
const produto2 = {
  categoria: "detergente",
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Ypê",
  preco: 3.0,
  desconto: false,
  produtosComplementares: ["sabão em barra", "sabão em pó", "esponja"],
  imagem: "./media/Detergente-Neutro-Ype.png",
};

//Produto 3 (objeto)
const produto3 = {
  categoria: "leite condensado",
  nome: "Leite Condensado Integral",
  embalagem: "395 g",
  marca: "Nestle",
  preco: 5.0,
  desconto: true,
  produtosComplementares: ["chocolate", "açúcar", "granulado"],
  imagem: "./media/Leite-Condensado-Integral-Moça-Nestle-395g-300x300.png",
};

//Produto 4 (objeto) - teste
const produto4 = {
  categoria: "detergente",
  nome: "Detergente Líquido Neutro",
  embalagem: "500 ml",
  marca: "Limpol",
  preco: 2.0,
  desconto: false,
  produtosComplementares: ["sabão em barra", "sabão em pó", "esponja"],
};

//Lista com todos os produtos disponíveis (semana2)

let produtosDisponiveis = [];
produtosDisponiveis.push(produto1, produto2, produto3, produto4);
console.log(produtosDisponiveis);

//Relatório dos Produtos

for (let i = 0; i < produtosDisponiveis.length; i++) {
  console.log(`${produtosDisponiveis[i].categoria.toUpperCase()}
Nome: ${produtosDisponiveis[i].nome}
Embalagem: ${produtosDisponiveis[i].embalagem}
Marca: ${produtosDisponiveis[i].marca}
Preço: ${produtosDisponiveis[i].preco.toFixed(2)}
O preço está com desconto? ${produtosDisponiveis[i].desconto}
Produtos complementares: ${produtosDisponiveis[i].produtosComplementares.join(
    ", "
  )}`);
  console.log("\n");
}

/* 
//Outra opção de fazer o item 1
//Produto 1
let textoProdutosComplementares1 = "";
for (let chave in produtosDisponiveis[0]) {
  if (chave === "produtosComplementares") {
    textoProdutosComplementares1 = produtosDisponiveis[0][chave];
  }
}

//Produto 2
let textoProdutosComplementares2 = "";
for (let chave in produtosDisponiveis[1]) {
  if (chave === "produtosComplementares") {
    textoProdutosComplementares2 = produtosDisponiveis[1][chave];
  }
}

//Produto 3
let textoProdutosComplementares3 = "";
for (let chave in produtosDisponiveis[2]) {
  if (chave === "produtosComplementares") {
    textoProdutosComplementares3 = produtosDisponiveis[2][chave];
  }
}

console.log(`${produtosDisponiveis[0].categoria.toUpperCase()}
Nome: ${produtosDisponiveis[0].nome}
Embalagem: ${produtosDisponiveis[0].embalagem}
Marca: ${produtosDisponiveis[0].marca}
Preço: ${produtosDisponiveis[0].preco.toFixed(2)}
O preço está com desconto? ${produtosDisponiveis[0].desconto}
Produtos complementares: ${textoProdutosComplementares1.join(", ")}`);

console.log(`${produtosDisponiveis[1].categoria.toUpperCase()}
Nome: ${produtosDisponiveis[1].nome}
Embalagem: ${produtosDisponiveis[1].embalagem}
Marca: ${produtosDisponiveis[1].marca}
Preço: ${produtosDisponiveis[1].preco.toFixed(2)}
O preço está com desconto? ${produtosDisponiveis[1].desconto}
Produtos complementares: ${textoProdutosComplementares2.join(", ")}`);

console.log(`${produtosDisponiveis[2].categoria.toUpperCase()}
Nome: ${produtosDisponiveis[2].nome}
Embalagem: ${produtosDisponiveis[2].embalagem}
Marca: ${produtosDisponiveis[2].marca}
Preço: ${produtosDisponiveis[2].preco.toFixed(2)}
O preço está com desconto? ${produtosDisponiveis[2].desconto}
Produtos complementares: ${textoProdutosComplementares3.join(", ")}`);
*/

//Relatório de todos os produtos
for (produto of produtosDisponiveis) {
  for (chave in produto) {
    console.log(`${chave}: ${produto[chave]}`);
  }
  console.log("\n");
}

//Função para retornar o relatório do Produto Desejado

function relatorio(produto) {
  let relatorioDoProduto = "";
  for (let chave in produto) {
    relatorioDoProduto += `${chave}: ${produto[chave]}\n`;
  }
  return relatorioDoProduto;
}
//Verificação da função relatorio
console.log(relatorio(produto1));
console.log(`\n`);
console.log(relatorio(produto2));
console.log(`\n`);
console.log(relatorio(produto3));

//Função para verificar se um produto está dentro de uma lista, retorna um objeto
/*
function verificaProdutoNaLista(listaDeProdutos, nomeDoProduto) {
  let produtoEncontrado = "";

  for (let produto of listaDeProdutos) {
    if (produto.categoria === nomeDoProduto) {
      produtoEncontrado = produto;
      return produtoEncontrado;
    } else if (produto.categoria !== nomeDoProduto) {
      produtoEncontrado = produtoEncontrado;
    }
  }

  if (produtoEncontrado === "") {
    produtoEncontrado = alert(
      "O produto desejado não foi encontrado na lista informada."
    );
  }

  return produtoEncontrado;
}
//Verificação da funçao verificaProdutoNaLista
console.log(verificaProdutoNaLista(produtosDisponiveis, "leite condensado"));
console.log(verificaProdutoNaLista(produtosDisponiveis, "feijao"));
*/

//Para a função verificaProdutoNaLista, se eu tivesse mais de um produto na mesma categoria, imprime os objeto:

function verificaProdutosNaLista(listaDeProdutos, nomeDoProduto) {
  let produtosEncontrado = [];

  for (let produto of listaDeProdutos) {
    if (produto.categoria === nomeDoProduto) {
      produtosEncontrado.push(produto);
    } else if (produto.categoria !== nomeDoProduto) {
      produtosEncontrado = produtosEncontrado;
    }
  }

  if (produtosEncontrado.length === 0) {
    alert("O produto desejado não foi encontrado na lista informada.");
  } else {
    for (prod of produtosEncontrado) {
      console.log(prod);
    }
    if (produtosEncontrado.length === 1) {
      console.log(`Foi encontrado 1 resultado.`);
    } else {
      console.log(`Foram encontrados ${produtosEncontrado.length} resultados.`);
    }
  }
  return produtosEncontrado;
}

// verificaProdutosNaLista(produtosDisponiveis, "arroz");
// verificaProdutosNaLista(produtosDisponiveis, "detergente");
// verificaProdutosNaLista(produtosDisponiveis, "feijão");

/*
//TESTE (Retorna Lista)

//Função para verificar se um produto está dentro de uma lista

function verificaProdutoNaLista(listaDeProdutos, nomeDoProduto) {
  let produtoEncontrado = [];

  for (let produto of listaDeProdutos) {
    if (produto.categoria.includes(nomeDoProduto)) {
      produtoEncontrado.push(produto);
    } else if (produto.categoria !== nomeDoProduto) {
      produtoEncontrado = produtoEncontrado;
    }
  }

  if (produtoEncontrado.length === 0) {
    produtoEncontrado = alert(
      "O produto desejado não foi encontrado na lista informada."
    );
  }

  return produtoEncontrado;
}
//Verificação da funçao verificaProdutoNaLista
// console.log(verificaProdutoNaLista(produtosDisponiveis, "leite condensado"));
// console.log(verificaProdutoNaLista(produtosDisponiveis, "detergente"));
// console.log(verificaProdutoNaLista(produtosDisponiveis, "feijão"));
*/

/*
function verificaProdutosNaLista(listaDeProdutos, nomeDoProduto) {
  let produtoEncontrado = [];
    
  for (let produto of listaDeProdutos) {
    if (produto.categoria.includes(nomeDoProduto)) {
      produtoEncontrado.push(produto);
    } else if (produto.categoria.includes(nomeDoProduto) !== nomeDoProduto) {
      produtoEncontrado = produtoEncontrado;
    }
  }

  if (produtosEncontrado.length === 0) {
    alert("O produto desejado não foi encontrado na lista informada.");
  } else {
    for (prodObj of produtoEncontrado) {
      console.log(prodObj);
    }
  }
}
*/
