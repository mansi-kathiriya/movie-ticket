const Joi = require("joi");

/** Create booking */
const createBooking = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        showtime: Joi.string().required().trim(),
        num_ticket: Joi.number().integer(),
        total_price: Joi.number().integer(),
        booking_time: Joi.date().required(),
    }),
};

module.exports = {
    createBooking,
};