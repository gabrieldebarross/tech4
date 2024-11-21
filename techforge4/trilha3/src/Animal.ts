class Animal {
    public energia: number = 50;

    comer(): void {
        this.energia += 10;
    }

    statusEnergia(): void {
        console.log(`Energia do animal: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("Leão caçando...");
        this.energia -= 10;
        super.comer();
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("Pássaro se alimentando...");
        super.comer();
    }
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();
