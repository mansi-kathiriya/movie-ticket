const express = require("express");
const { reviewValidation } = require("../../validations");
const { reviewController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create review */
router.post(
    "/create-review",
    validate(reviewValidation.createReview),
    reviewController.createReview
);

/** Get review list */
router.get(
    "/review-list",
    reviewController.getReviewList
);

/** Get review details by id */
router.get(
    "/review-details/:reviewId",
    reviewController.getReviewDetails,
);

/** Update review */
router.put(
    "/update-details/:reviewId",
    reviewController.updateDetails,
);

/** Delete review */
router.delete(
    "/review-delete/:reviewId",
    reviewController.deleteReview,
);

module.exports = router;