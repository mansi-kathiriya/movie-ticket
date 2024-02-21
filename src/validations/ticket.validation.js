const Joi = require("joi");

/** Create ticket */
const createTicket = {
    body: Joi.object().keys({
        booking: Joi.string().required().trim(),
        seat: Joi.string().required().trim(),
        price: Joi.number().integer(),
        status: Joi.string().required().trim()
    }),
};

module.exports = {
    createTicket,
};