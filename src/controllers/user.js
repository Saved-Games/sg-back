const { User } = require('../database/models');

class UserController {
    async store(req, res) {
        try {
            const user = await User.create(req.body);

            return res.json(user);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new UserController;