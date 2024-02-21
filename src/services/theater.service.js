const { Theater } = require("../models");

/**
 * Create theater
 * @param {object} reqBody
 * @returns {Promise<Theater>}
 */
const createTheater = async (reqBody) => {
    return Theater.create(reqBody);
};

/** get theater List */
const getTheaterList = async (filter, options) => {
    return Theater.find()
};

/** Get theater by name */
const getTheaterByName = async (theater_name) => {
    return Theater.findOne({ theater_name })
};

/** Get theater deatils by id */
const getTheaterById = async (theaterId) => {
    return Theater.findById(theaterId);
}

/** Theater details update by id */
const updateDetails = async (theaterId, updateBody) => {
    return Theater.findByIdAndUpdate(theaterId, { $set: updateBody });
}

/** Delete theater */
const deleteTheater = async (theaterId) => {
    return Theater.findByIdAndDelete(theaterId);
}

module.exports = {
    createTheater,
    getTheaterList,
    getTheaterByName,
    getTheaterById,
    updateDetails,
    deleteTheater,
};