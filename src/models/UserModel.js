const { User } = require('../database/models');
const utilities = require('../services/utilities');

class UserModel {

    store(userData, res) {
        utilities.crypt(userData.password)
            .then(response => {
                let cryptedPass = response;
                const userObj = { ...userData, password: cryptedPass };

                new Promise((resolve, reject) => {
                    User.create(userObj)
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

            })
            .catch(err => {
                return res.status(400).json({ error: err.message });
            })
    }
}

module.exports = new UserModel;