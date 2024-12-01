"use strict";
class Animal {
    constructor() {
        this.energia = 50;
    }
    comer() {
        this.energia += 10;
    }
    statusEnergia() {
        console.log(`Energia do animal: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        console.log("Leão caçando...");
        this.energia -= 10;
        super.comer();
    }
}
class Passaro extends Animal {
    comer() {
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
