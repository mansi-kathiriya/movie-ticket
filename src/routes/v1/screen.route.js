const express = require("express");
const { screenValidation } = require("../../validations");
const { screenController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create screen */
router.post(
    "/create-screen",
    validate(screenValidation.createScreen),
    screenController.createScreen
);

/** Get screen list */
router.get(
    "/screen-list",
    screenController.getScreenList
);

/** Get screen details by id */
router.get(
    "/screen-details/:screenId",
    screenController.getScreenDetails,
);

/** Update screen */
router.put(
    "/update-details/:screenId",
    screenController.updateDetails,
);

/** Delete screen */
router.delete(
    "/screen-delete/:screenId",
    screenController.deleteScreen,
);

module.exports = router;