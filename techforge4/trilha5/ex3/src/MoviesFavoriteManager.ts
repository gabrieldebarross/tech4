class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();
  
    addFavorite(item: string): void {
      this.favorites.add(item);
    }
  
    getFavorites(): string[] {
      return Array.from(this.favorites).sort();
    }
  }
  