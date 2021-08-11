const Joi = require('joi');

const { regex } = require('../constants');

module.exports = {
    createUser: Joi.object().keys({
        first_name: Joi.string().required().min(1).max(70),
        last_name: Joi.string().min(1).max(70),
        email: Joi.string().required().regex(regex.EMAIL_REGEX),
        phone: Joi.string().regex(regex.PHONE_REGEX),
        password: Joi.string().required().min(1).max(70)
    })
};
