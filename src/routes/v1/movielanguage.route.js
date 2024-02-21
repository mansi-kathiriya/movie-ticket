const express = require("express");
const { movielanguageValidation } = require("../../validations");
const { movielanguageController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create movie language */
router.post(
    "/create-movielanguage",
    validate(movielanguageValidation.createMovieLanguage),
    movielanguageController.createMovieLanguage
);

/** Get movie language list */
router.get(
    "/movielanguage-list",
    movielanguageController.getMovieLanguageList
);

/** Get movie language details by id */
router.get(
    "/movielanguage-details/:movielanguageId",
    movielanguageController.getMovieLanguageDetails,
);

/** Update movie language */
router.put(
    "/update-details/:movielanguageId",
    movielanguageController.updateDetails,
);

/** Delete movie language */
router.delete(
    "/movielanguage-delete/:movielanguageId",
    movielanguageController.deleteMovieLanguage,
);

module.exports = router;