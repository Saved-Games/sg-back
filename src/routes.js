// const UserController = require('./controllers/user');
const IGDB = require('./services/apis/igdb/Igdb');

module.exports = app => {
    app.get('/igdb/all-games', async function (req, res) {
        var page = req.query.page;
        var limit = req.query.limit;
        return IGDB.getAllGames(page, res);
    });

    app.get('/igdb/game/name/:name', async function (req, res) {
        var name = req.params.name;
        var page = req.query.page;
        return IGDB.getGameByName(name, page, res);
    });

    app.get('/igdb/game/id/:id', async function (req, res) {
        var name = req.params.id;
        return IGDB.getGameByName(id, res);
    });

    app.get('/igdb/cover/id/:id', async function (req, res) {
        var id = req.params.id;
        IGDB.getCoverByID(id);
    });
}