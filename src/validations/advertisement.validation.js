const Joi = require("joi");

/** Create advertisement */
const createAdvertisement = {
    body: Joi.object().keys({
        theater: Joi.string().required().trim(),
        advertiser_name: Joi.string().required().trim(),
        ad_desc: Joi.string().required().trim(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        cost: Joi.number().integer(),
    }),
};

module.exports = {
    createAdvertisement,
};