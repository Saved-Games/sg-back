const UserModel = require('../models/UserModel');
const utilities = require('../services/utilities');

class UserController {

    store(req, res) {
        const user = req.body;
        let errors = [];

        if (!user.name || typeof user.name == undefined || user.name == null) {
            errors.push({
                message: 'Nome inválido'
            })
        }

        if (user.name.length < 3 || user.name.length > 100) {
            errors.push({
                message: 'Nome de tamanho inválido'
            })
        }

        if (!user.username || typeof user.username == undefined || user.username == null) {
            errors.push({
                message: 'Usuário inválido'
            })
        }

        if (user.username.length < 5 || user.username.length > 20) {
            errors.push({
                message: 'Nome de usuário de tamanho inválido'
            })
        }

        if (!user.email || typeof user.email == undefined || user.email == null || !utilities.testString2Email(user.email)) {
            errors.push({
                message: 'E-mail inválido'
            })
        }

        if (!user.password || typeof user.password == undefined || user.password == null) {
            errors.push({
                message: 'Senha inválida'
            })
        }

        if (user.password.length < 5 || user.password.length > 30) {
            errors.push({
                message: 'Senha de tamanho inválido'
            })
        }
        //#endregion validação

        if (errors.length > 0) {
            return res.status(400).send({
                errors: errors
            });
        }

        UserModel.store(user, res);
    }

}

module.exports = new UserController;