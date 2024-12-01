class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
    }
  
    removeItem(item: string): void {
      delete this.inventory[item];
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  