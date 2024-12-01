"use strict";
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPeloCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const produtosLoja = [
    { codigo: 1, nome: "Camiseta" },
    { codigo: 2, nome: "Short" },
    { codigo: 3, nome: "Tenis" }
];
const loja = new Loja(produtosLoja);
const buscarProduto = loja.buscarProdutoPeloCodigo(1);
if (buscarProduto) {
    console.log("Produto encontrado");
}
else {
    console.log("Produto não encotrado");
}
if (produtosLoja.find(produtosLoja => produtosLoja.codigo === 1)) {
    console.log("Produto encontrado");
}
else {
    console.log("Produto não encotrado");
}
