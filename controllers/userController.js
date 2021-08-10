const ErrorHandler = require("../errors/ErrorHandler");
const { UserModel, TestModel } = require('../models');
const { userHelper } = require('../helpers');

module.exports = {
    getAllUsers: async (reg, res) => {
        const users = await UserModel.findAll();

        const normalizedUsers = users.map(user => userHelper.userNormalizator(user.dataValues));

        res.json({ normalizedUsers });
    },

    getUser: (reg, res) => {
        res.json('One user');
    },

    createUser: (reg, res) => {
        res.json('One user');
    },

    deleteUser: (reg, res) => {
        res.json('Delete user');
    },

    updateUser: (reg, res) => {
        res.json('Update user');
    }
}
