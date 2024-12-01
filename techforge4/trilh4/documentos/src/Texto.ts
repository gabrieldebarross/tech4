class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string{
        return `Título: [${this.titulo}], Conteúdo: [${this.conteudo}]`;
    }
}

const meuDocumento = new Texto("Titulo", "Conteúdo");
console.log(meuDocumento.exibir());