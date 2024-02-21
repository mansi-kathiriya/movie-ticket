const express = require("express");
const { theaterValidation } = require("../../validations");
const { theaterController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create theater */
router.post(
    "/create-theater",
    validate(theaterValidation.createTheater),
    theaterController.createTheater
);

/** Get theater list */
router.get(
    "/theater-list",
    theaterController.getTheaterList
);

/** Get theater details by id */
router.get(
    "/theater-details/:theaterId",
    theaterController.getTheaterDetails,
);

/** Update theater */
router.put(
    "/update-details/:theaterId",
    theaterController.updateDetails,
);

/** Delete theater */
router.delete(
    "/theater-delete/:theaterId",
    theaterController.deleteTheater,
);

module.exports = router;