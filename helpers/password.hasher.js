const bcrypt = require('bcrypt');

const { ErrorHandler } = require('../errors');
const { constants: { SALT } } = require('../constants');

module.exports = {
    compare: async (hashedPassword, password) => {
        const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordMatched) {
            throw new ErrorHandler(401, "WRONG_PASSWORD_OR_EMAIL",
                "401.0");
        }
    },

    hash: (password) => bcrypt.hash(password, SALT)
};
