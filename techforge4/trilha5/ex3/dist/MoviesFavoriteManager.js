"use strict";
class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = new Set();
    }
    addFavorite(item) {
        this.favorites.add(item);
    }
    getFavorites() {
        return Array.from(this.favorites).sort();
    }
}
