"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: [${this.titulo}], Conteúdo: [${this.conteudo}]`;
    }
}
const meuDocumento = new Texto("Titulo", "Conteúdo");
console.log(meuDocumento.exibir());
