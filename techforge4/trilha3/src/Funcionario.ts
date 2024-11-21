abstract class Funcionario {
    npx nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.1;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`${funcionario.nome}: R$ ${funcionario.salario + funcionario.calcularBonus()}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
];

calcularSalarioComBonus(funcionarios);
