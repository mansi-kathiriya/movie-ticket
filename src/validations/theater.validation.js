const Joi = require("joi");

/** Create theater */
const createTheater = {
    body: Joi.object().keys({
        theater_name: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
        capacity: Joi.number().integer(),
        contact_info: Joi.string().required().trim(),
    }),
};

module.exports = {
    createTheater,
};