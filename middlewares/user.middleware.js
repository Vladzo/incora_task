const {createUserValidator, updateUserValidator} = require("../validator");
const {
    ErrorHandler
} = require('../errors');
const { UserModel } = require('../models')

module.exports = {

    getUserById: async (req, res, next) => {
        try {
            const value = Number(req.params.userId);

            const user = await UserModel.findOne({ where: { id: value }, raw: true });

            if (!user) {
                throw new ErrorHandler(404, 'RECORD_NOT_FOUND', '404.0');
            }

            req.user = user;
            next();
        } catch (err) {
            next(err);
        }
    },

    checkCreateUserValidity: (req, res, next) => {
        try {
            const { error } = createUserValidator.createUser.validate(req.body);

            if (error) {
                console.log('wrong format');
                throw new ErrorHandler(405, 'Wrong format', '405.0');
            }

            next();
        } catch (err) {
            next(err);
        }
    },

    canUserRegister: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await UserModel.findOne({ where: { email }, raw: true });

            console.log(user);
            if (user) {
                throw new ErrorHandler(405, 'Email already exist', "405.0");
            }

            next();
        } catch (err) {
            next(err);
        }
    },

    checkUpdateUserValidity: (req, res, next) => {
        try {
            const { error } = updateUserValidator.createUser.validate(req.body);

            if (error) {
                throw new ErrorHandler(405, 'Wrong format', '405.0');
            }

            next();
        } catch (err) {
            next(err);
        }
    },
};
