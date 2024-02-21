const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middleware/validate");
const upload = require("../../middleware/upload")

const router = express.Router();

/** Create movie */
router.post(
    "/create-movie",
    upload.single('image'),
    validate(movieValidation.createMovie),
    movieController.createMovie
);

/** Get movie list */
router.get(
    "/movie-list",
    movieController.getMovieList
);

/** Get movie details by id */
router.get(
    "/movie-details/:movieId",
    movieController.getMovieDetails,
);

/** Update movie */
router.put(
    "/update-details/:movieId",
    movieController.updateDetails,
);

/** Delete movie */
router.delete(
    "/movie-delete/:movieId",
    movieController.deleteMovie,
);

module.exports = router;