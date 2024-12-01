"use strict";
class WarehouseInventory extends Inventory {
    constructor() {
        super(...arguments);
        this.inventory = {};
    }
    addItem(item, quantity) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        }
        else {
            this.inventory[item] = quantity;
        }
    }
    removeItem(item) {
        delete this.inventory[item];
    }
    getInventory() {
        return this.inventory;
    }
}
