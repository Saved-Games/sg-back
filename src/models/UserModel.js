const { User } = require('../database/models');

class UserModel {

    async store(userData, res) {
        try {
            const user = await User.create(userData);

            return res.json(user);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new UserModel;