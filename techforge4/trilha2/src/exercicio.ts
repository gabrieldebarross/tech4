// Exercício 1: 
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0){
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    deposito(valor: number): void {
        if(valor > 0){
            this.saldo += valor;
            console.log(`O valor de ${valor} foi adicionado ao saldo!`);
        } else {
            console.log("O valor para depósito precisar de positivo!");
        }
    }

    saque(valor: number): void {
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log(`O valor de ${valor} foi sacado com sucesso!`);
        } else {
            console.log("Valor inválido.");
        }
    }

    verSaldo(): number {
        return this.saldo;
    }
}

// Exercício 2: 
// Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    leituraFinalizada(): void {
        this.lido = true;
    }
}

// Exercício 3: 
// Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).

class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotal(): number{
        return this.preco * this.quantidade;
    }
}

// Exercício 4: 
// Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura {
    private valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    Fahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    Kelvin(): number {
        return this.valor + 273.15;
    }
}

// Exercício 5: 
// Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

class Agenda {
    private compromissos: string[];

    constructor(){
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string){
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): void {
        console.log('Lista de compromissos:');
        this.compromissos.forEach((compromisso, i) => {
            console.log(`${i + 1}: ${compromisso}`);
        });
    }
}