class Game {
    id;
    category;
    cover;
    name;
    rating;
    summary;

    constructor(id, category, cover, name, rating, summary) {
        this.id = id;
        this.category = category;
        this.cover = cover;
        this.name = name;
        this.rating = rating;
        this.summary = summary
    }
}

module.exports = Game;