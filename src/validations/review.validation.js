const Joi = require("joi");

/** Create review */
const createReview = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        movie: Joi.string().required().trim(),
        rating: Joi.number().integer(),
        comment: Joi.string().required().trim(),
    }),
};

module.exports = {
    createReview,
};