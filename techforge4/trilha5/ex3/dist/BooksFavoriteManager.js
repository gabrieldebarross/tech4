"use strict";
class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = [];
    }
    addFavorite(item) {
        this.favorites.unshift(item);
    }
    getFavorites() {
        return this.favorites;
    }
}
