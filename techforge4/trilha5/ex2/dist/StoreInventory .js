"use strict";
class StoreInventory extends Inventory {
    constructor() {
        super(...arguments);
        this.inventory = {};
        this.maxQuantity = 10;
    }
    addItem(item, quantity) {
        if (this.inventory[item]) {
            if (this.inventory[item] + quantity <= this.maxQuantity) {
                this.inventory[item] += quantity;
            }
            else {
                console.log(`Não é possível adicionar mais de ${this.maxQuantity} unidade de ${item}`);
            }
        }
        else {
            if (quantity <= this.maxQuantity) {
                this.inventory[item] = quantity;
            }
            else {
                console.log(`Não é possível adicionar mais de ${this.maxQuantity} unidades de  ${item}`);
            }
        }
    }
    removeItem(item) {
        delete this.inventory[item];
    }
    getInventory() {
        return this.inventory;
    }
}
