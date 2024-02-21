const Joi = require("joi");

/** Create restaurant */
const createRestaurant = {
    body: Joi.object().keys({
        movie: Joi.string().required().trim(),
        language_name: Joi.string().required().trim(),
    }),
};

module.exports = {
    createRestaurant,
};