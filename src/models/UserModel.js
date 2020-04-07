const { User } = require('../database/models');
const utilities = require('../services/utilities');

class UserModel {

    store(userData, res) {
        utilities.crypt(userData.password)
            .then(response => {
                let cryptedPass = response;
                const userObj = { ...userData, password: cryptedPass };
                this.createUserPromise(userObj, res);
            })
            .catch(err => {
                return res.status(400).json({ error: err.message });
            })
    }

    createUserPromise(user, res) {
        new Promise((resolve, reject) => {
            User.create(user)
                .then(response => {
                    resolve(
                        res.status(200).json({
                            success: true,
                            message: 'Usuário criado com sucesso'
                        })
                    );
                })
                .catch(err => {
                    reject(res.status(400).json({ error: err.message }));
                })
        })
    }
}

module.exports = new UserModel;