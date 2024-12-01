class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];
  
    addFavorite(item: string): void {
      this.favorites.unshift(item); 
    }
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  