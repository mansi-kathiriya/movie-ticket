const Joi = require("joi");

// Register
const Register = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
    }),
};

module.exports = {
    Register,
};