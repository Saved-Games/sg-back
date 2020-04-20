const UserController = require('./controllers/user');
const IGDB = require('./services/apis/igdb/igdb');

module.exports = app => {
    app.post('/users', UserController.store);
    app.get('/igdb', IGDB.getAllGames);
    app.get('/igdb-cover-by-id/:id', async function (req, res) {
        var id = req.params.id;
        IGDB.getCoverByID(id);
    });
}