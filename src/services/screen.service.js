const { Screen } = require("../models");

/**
 * Create screen
 * @param {object} reqBody
 * @returns {Promise<Screen>}
 */
const createScreen = async (reqBody) => {
    return Screen.create(reqBody);
};

/** get screen List */
const getScreenList = async (filter, options) => {
    return Screen.find()
        .populate("theater")
};

/** Get screen deatils by id */
const getScreenById = async (screenId) => {
    return Screen.findById(screenId);
}

/** Screen details update by id */
const updateDetails = async (screenId, updateBody) => {
    return Screen.findByIdAndUpdate(screenId, { $set: updateBody });
}

/** Delete screen */
const deleteScreen = async (screenId) => {
    return Screen.findByIdAndDelete(screenId);
}

module.exports = {
    createScreen,
    getScreenList,
    getScreenById,
    updateDetails,
    deleteScreen,
};