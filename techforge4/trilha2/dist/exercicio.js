"use strict";
// Exercício 1: 
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`O valor de ${valor} foi adicionado ao saldo!`);
        }
        else {
            console.log("O valor para depósito precisar de positivo!");
        }
    }
    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`O valor de ${valor} foi sacado com sucesso!`);
        }
        else {
            console.log("Valor inválido.");
        }
    }
    verSaldo() {
        return this.saldo;
    }
}
// Exercício 2: 
// Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    leituraFinalizada() {
        this.lido = true;
    }
}
// Exercício 3: 
// Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotal() {
        return this.preco * this.quantidade;
    }
}
// Exercício 4: 
// Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    Fahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    Kelvin() {
        return this.valor + 273.15;
    }
}
// Exercício 5: 
// Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
        console.log('Lista de compromissos:');
        this.compromissos.forEach((compromisso, i) => {
            console.log(`${i + 1}: ${compromisso}`);
        });
    }
}
