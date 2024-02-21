const Joi = require("joi");

/** Create movie */
const createMovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        desc: Joi.string().required().trim(),
        image: Joi.string().required().trim(),
        duration: Joi.string().required().trim(),
        director: Joi.string().required().trim(),
        release_date: Joi.date().required(),
    }),
};

module.exports = {
    createMovie,
};