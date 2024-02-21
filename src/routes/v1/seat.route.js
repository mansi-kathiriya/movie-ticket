const express = require("express");
const { seatValidation } = require("../../validations");
const { seatController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create seat */
router.post(
    "/create-seat",
    validate(seatValidation.createSeat),
    seatController.createSeat
);

/** Get seat list */
router.get(
    "/seat-list",
    seatController.getSeatList
);

/** Get seat details by id */
router.get(
    "/seat-details/:seatId",
    seatController.getSeatDetails,
);

/** Update seat */
router.put(
    "/update-details/:seatId",
    seatController.updateDetails,
);

/** Delete seat */
router.delete(
    "/seat-delete/:seatId",
    seatController.deleteSeat,
);

module.exports = router;