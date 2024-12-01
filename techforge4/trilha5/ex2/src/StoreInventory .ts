class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private readonly maxQuantity: number = 10;
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        if (this.inventory[item] + quantity <= this.maxQuantity) {
          this.inventory[item] += quantity;
        } else {
          console.log(`Não é possível adicionar mais de ${this.maxQuantity} unidade de ${item}`);
        }
      } else {
        if (quantity <= this.maxQuantity) {
          this.inventory[item] = quantity;
        } else {
          console.log(`Não é possível adicionar mais de ${this.maxQuantity} unidades de  ${item}`);
        }
      }
    }
  
    removeItem(item: string): void {
      delete this.inventory[item];
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  