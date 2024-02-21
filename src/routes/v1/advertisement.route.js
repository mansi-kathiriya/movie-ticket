const express = require("express");
const { advertisementValidation } = require("../../validations");
const { advertisementController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create advertisement */
router.post(
    "/create-advertisement",
    validate(advertisementValidation.createAdvertisement),
    advertisementController.createAdvertisement
);

/** Get advertisement list */
router.get(
    "/advertisement-list",
    advertisementController.getAdvertisementList
);

/** Get advertisement details by id */
router.get(
    "/advertisement-details/:advertisementId",
    advertisementController.getAdvertisementDetails,
);

/** Update advertisement */
router.put(
    "/update-details/:advertisementId",
    advertisementController.updateDetails,
);

/** Delete advertisement */
router.delete(
    "/advertisement-delete/:advertisementId",
    advertisementController.deleteAdvertisement,
);

module.exports = router;