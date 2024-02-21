const express = require("express");
const { showtimeValidation } = require("../../validations");
const { showtimeController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create showtime */
router.post(
    "/create-showtime",
    validate(showtimeValidation.createShowtime),
    showtimeController.createShowtime
);

/** Get showtime list */
router.get(
    "/showtime-list",
    showtimeController.getShowtimeList
);

/** Get showtime details by id */
router.get(
    "/showtime-details/:showtimeId",
    showtimeController.getShowtimeDetails,
);

/** Update showtime */
router.put(
    "/update-details/:showtimeId",
    showtimeController.updateDetails,
);

/** Delete showtime */
router.delete(
    "/showtime-delete/:showtimeId",
    showtimeController.deleteShowtime,
);

module.exports = router;