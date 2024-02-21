const Joi = require("joi");

/** Create seat */
const createSeat = {
    body: Joi.object().keys({
        theater: Joi.string().required().trim(),
        seat_num: Joi.number().integer(),
    }),
};

module.exports = {
    createSeat,
};