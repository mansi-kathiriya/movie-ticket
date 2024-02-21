const express = require("express");
const { paymentValidation } = require("../../validations");
const { paymentController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create payment */
router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);

/** Get payment list */
router.get(
    "/payment-list",
    paymentController.getPaymentList
);

/** Get payment details by id */
router.get(
    "/payment-details/:paymentId",
    paymentController.getPaymentDetails,
);

/** Update payment */
router.put(
    "/update-details/:paymentId",
    paymentController.updateDetails,
);

/** Delete payment */
router.delete(
    "/payment-delete/:paymentId",
    paymentController.deletePayment,
);

module.exports = router;