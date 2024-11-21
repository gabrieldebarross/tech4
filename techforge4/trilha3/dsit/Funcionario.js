"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        console.log(`${funcionario.nome}: R$ ${funcionario.salario + funcionario.calcularBonus()}`);
    });
}
const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
];
calcularSalarioComBonus(funcionarios);
