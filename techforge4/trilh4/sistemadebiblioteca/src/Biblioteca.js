"use strict";
class Biblioteca {
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const livrosDaBiblioteca = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "1984", autor: "George Orwell", disponivel: false }
];
const minhaBiblioteca = new Biblioteca(livrosDaBiblioteca);
const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
if (livrosDisponiveis.length > 0) {
    console.log("Livros disponíveis:");
    livrosDisponiveis.forEach(livro => {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
    });
}
else {
    console.log("Não há livros disponíveis no momento.");
}
