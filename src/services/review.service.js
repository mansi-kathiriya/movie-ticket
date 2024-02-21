const { Review } = require("../models");

/**
 * Create review
 * @param {object} reqBody
 * @returns {Promise<Review>}
 */
const createReview = async (reqBody) => {
    return Review.create(reqBody);
};

/** get review List */
const getReviewList = async (filter, options) => {
    return Review.find()
        .populate("user")
        .populate("movie")
};

/** Get review deatils by id */
const getReviewById = async (reviewId) => {
    return Review.findById(reviewId);
}

/** Review details update by id */
const updateDetails = async (reviewId, updateBody) => {
    return Review.findByIdAndUpdate(reviewId, { $set: updateBody });
}

/** Delete review */
const deleteReview = async (reviewId) => {
    return Review.findByIdAndDelete(reviewId);
}

module.exports = {
    createReview,
    getReviewList,
    getReviewById,
    updateDetails,
    deleteReview,
};