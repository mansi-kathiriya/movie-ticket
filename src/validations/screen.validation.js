const Joi = require("joi");

/** Create screen */
const createScreen = {
    body: Joi.object().keys({
        theater: Joi.string().required().trim(),
        screen_number: Joi.number().integer(),
        capacity: Joi.number().integer(),
    }),
};

module.exports = {
    createScreen,
};