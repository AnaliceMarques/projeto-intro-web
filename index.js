console.log(`Módulo 1 - Projeto de Introdução à Web`);

//Semana 1

//Item escolhido: Produtos de Supermercado

let nomeDoProduto; //String
let embalagemDoProduto; //String
let marcaDoProduto; //String
let precoDoProduto; //Number
let desconto; //Boolean
let produtosComplementares; //Array de String

//Produto 1
const nomeDoProduto1 = "Arroz Parbolizado Tipo 1";
const embalagemDoProduto1 = "1 kg";
const marcaDoProduto1 = "Urbano";
const precoDoProduto1 = 7.0;
const desconto1 = false;
const produtosComplementares1 = ["Feijão", "Macarrão", "Farinha"];

//Produto 2
const nomeDoProduto2 = "Detergente Líquido Neutro";
const embalagemDoProduto2 = "500 ml";
const marcaDoProduto2 = "Ypê";
const precoDoProduto2 = 3.0;
const desconto2 = false;
const produtosComplementares2 = ["Sabão em barra", "Sabão em pó", "Esponja"];

//Produto 3
const nomeDoProduto3 = "Leite Condensado Integral";
const embalagemDoProduto3 = "395 g";
const marcaDoProduto3 = "Nestle";
const precoDoProduto3 = 5.0;
const desconto3 = true;
const produtosComplementares3 = ["Chocolate", "Açúcar", "Granulado"];

//Média dos valores dos produtos
const media = (precoDoProduto1 + precoDoProduto2 + precoDoProduto3) / 3;
console.log(`A média do preço dos produtos é ${media}`);

//Verificação se todos os produtos estão com desconto
const verificaDesconto = desconto1 && desconto2 && desconto3;
console.log(`Todos os produtos estão com desconto? ${verificaDesconto}`);

//Relatório dos Produtos

//Produto 1
console.log(`${nomeDoProduto1.toUpperCase()}
Embalagem: ${embalagemDoProduto1}
Marca: ${marcaDoProduto1}
Preço: ${precoDoProduto1.toFixed(2)}
O preço está com desconto? ${desconto1}
Produtos complementares: ${produtosComplementares1}`);

//Produto 2
console.log(`${nomeDoProduto2.toUpperCase()}
Embalagem: ${embalagemDoProduto2}
Marca: ${marcaDoProduto2}
Preço: ${precoDoProduto2.toFixed(2)}
O preço está com desconto? ${desconto2}
Produtos complementares: ${produtosComplementares2}`);

//Produto 3
console.log(`${nomeDoProduto3.toUpperCase()}
Embalagem: ${embalagemDoProduto3}
Marca: ${marcaDoProduto3}
Preço: ${precoDoProduto3.toFixed(2)}
O preço está com desconto? ${desconto3}
Produtos complementares: ${produtosComplementares3}`);
