const express = require("express");
const { bookingValidation } = require("../../validations");
const { bookingController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create booking */
router.post(
    "/create-booking",
    validate(bookingValidation.createBooking),
    bookingController.createBooking
);

/** Get booking list */
router.get(
    "/booking-list",
    bookingController.getBookingList
);

/** Get booking details by id */
router.get(
    "/booking-details/:bookingId",
    bookingController.getBookingDetails,
);

/** Update booking */
router.put(
    "/update-details/:bookingId",
    bookingController.updateDetails,
);

/** Delete booking */
router.delete(
    "/booking-delete/:bookingId",
    bookingController.deleteBooking,
);

module.exports = router;