const { Payment } = require("../models");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<Payment>}
 */
const createPayment = async (reqBody) => {
    return Payment.create(reqBody);
};

/** get payment List */
const getPaymentList = async (filter, options) => {
    return Payment.find()
        .populate("booking")
};

/** Get payment deatils by id */
const getPaymentById = async (paymentId) => {
    return Payment.findById(paymentId);
}

/** Payment details update by id */
const updateDetails = async (paymentId, updateBody) => {
    return Payment.findByIdAndUpdate(paymentId, { $set: updateBody });
}

/** Delete payment */
const deletePayment = async (paymentId) => {
    return Payment.findByIdAndDelete(paymentId);
}

module.exports = {
    createPayment,
    getPaymentList,
    getPaymentById,
    updateDetails,
    deletePayment,
};