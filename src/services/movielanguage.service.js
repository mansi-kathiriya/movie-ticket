const { Movielanguage } = require("../models");

/**
 * Create movielanguage
 * @param {object} reqBody
 * @returns {Promise<Movielanguage>}
 */
const createMovielanguage = async (reqBody) => {
    return Movielanguage.create(reqBody);
};

/** get movielanguage List */
const getMovielanguageList = async (filter, options) => {
    return Movielanguage.find()
        .populate("movie")
};

/** Get movielanguage by name */
const getMovielanguageByName = async (language_name) => {
    return Movielanguage.findOne({ language_name })
};

/** Get movielanguage deatils by id */
const getMovielanguageById = async (movielanguageId) => {
    return Movielanguage.findById(movielanguageId);
}

/** Movielanguage details update by id */
const updateDetails = async (movielanguageId, updateBody) => {
    return Movielanguage.findByIdAndUpdate(movielanguageId, { $set: updateBody });
}

/** Delete movielanguage */
const deleteMovielanguage = async (movielanguageId) => {
    return Movielanguage.findByIdAndDelete(movielanguageId);
}

module.exports = {
    createMovielanguage,
    getMovielanguageList,
    getMovielanguageByName,
    getMovielanguageById,
    updateDetails,
    deleteMovielanguage,
};