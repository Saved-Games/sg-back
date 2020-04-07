const UserController = require('./controllers/user');

module.exports = app => {
    app.post('/users', UserController.store);

}