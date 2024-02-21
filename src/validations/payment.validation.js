const Joi = require("joi");

/** Create booking */
const createBooking = {
    body: Joi.object().keys({
        booking: Joi.string().required().trim(),
        payment_method: Joi.string().required().trim(),
        payment_status: Joi.string().required().trim(),
        payment_time: Joi.date().required()
    }),
};

module.exports = {
    createBooking,
};