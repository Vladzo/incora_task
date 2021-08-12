const { Op } = require("sequelize");

const ErrorHandler = require("../errors/ErrorHandler");
const { passwordHasher } = require("../helpers");
const { UserModel } = require('../models');
const { userHelper } = require('../helpers');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { body: { first_name, last_name, password, email, phone } } = req;

            const hashedPassword = await passwordHasher.hash(password);

            const createdUser = await UserModel.create({ ...req.body, password: hashedPassword })

            const normalizedUser = userHelper.userNormalizator(createdUser.dataValues);

            res.status(200).json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },

    getUser: (req, res, next) => {
        try {
            const {user} = req;

            const normalizedUser = userHelper.userNormalizator(user);

            res.status(200).json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const isThisEmail = await UserModel.findOne({where: {email: req.body.email, id: { [Op.not]: req.params.userId }}});

            if (isThisEmail) {
                throw new ErrorHandler(405, 'Email already exist', "405.0");
            }

            const value = Number(req.params.userId);

            const user = await UserModel.findOne({ where: { id: value } });

            if (!user) {
                throw new ErrorHandler(404, 'RECORD_NOT_FOUND', '404.0');
            }

            for (let key in req.body) {
                if (key === 'password') {
                    const hashedPassword = await passwordHasher.hash(req.body[key]);

                    user[key] = hashedPassword;
                    continue;
                }

                user[key] = req.body[key];
            }

            await user.save();

            const normalizedUsers = userHelper.userNormalizator(user.dataValues);

            res.json(normalizedUsers);
        } catch (err) {
            next(err);
        }
    }
}
