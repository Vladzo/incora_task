const { UserModel, TestModel } = require('../models');
const { userHelper } = require('../helpers');

module.exports = {
    login: async (reg, res) => {
        const users = await UserModel.findAll();

        const normalizedUsers = users.map(user => userHelper.userNormalizator(user.dataValues));

        res.json({ users: normalizedUsers });
    }
}
