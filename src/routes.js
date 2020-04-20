// const UserController = require('./controllers/user');
const IGDB = require('./services/apis/igdb/Igdb');

module.exports = app => {
    app.get('/igdb', async function (req, res) {
        var page = req.query.page;
        var limit = req.query.limit;
        return IGDB.getAllGames(page, res);
    });

    app.get('/igdb-cover-by-id/:id', async function (req, res) {
        var id = req.params.id;
        IGDB.getCoverByID(id);
    });
}