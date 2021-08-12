const {authService} = require("../services");
const {passwordHasher} = require("../helpers");
const { ErrorHandler } = require('../errors');
const { UserModel, OauthModel } = require('../models');
const { userHelper } = require('../helpers');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ where: { email }, raw: true });

            if (!user) {
                throw new ErrorHandler(401, 'Wrong password or email');
            }

            const { password: hashedPassword, id } = user;

            await passwordHasher.compare(hashedPassword, password);

            const tokenPair = await authService.getTokenPair();

            const oauth = await OauthModel.create({
                access_token: tokenPair.accessToken,
                refresh_token: tokenPair.refreshToken,
                user_id: id
            });

            const normalizedUser = userHelper.userNormalizator(user);

            res.status(200).json({
                ...tokenPair,
                normalizedUser
            });
        } catch (err) {
            next(err);
        }
    }
}
