const Joi = require("joi");

/** Create showtime */
const createShowtime = {
    body: Joi.object().keys({
        movie: Joi.string().required().trim(),
        theater: Joi.string().required().trim(),
        start_Time: Joi.date().required(),
        end_Time: Joi.date().required(),
        price: Joi.number().integer(),
    }),
};

module.exports = {
    createShowtime,
};