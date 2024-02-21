const { Advertisement } = require("../models");

/**
 * Create advertisement
 * @param {object} reqBody
 * @returns {Promise<Advertisement>}
 */
const createAdvertisement = async (reqBody) => {
    return Advertisement.create(reqBody);
};

/** get advertisement List */
const getAdvertisementList = async (filter, options) => {
    return Advertisement.find()
        .populate("theater")
};

/** Get advertisement by name */
const getAdvertisementByName = async (advertiser_name) => {
    return Advertisement.findOne({ advertiser_name })
};

/** Get advertisement deatils by id */
const getAdvertisementById = async (advertisementId) => {
    return Advertisement.findById(advertisementId);
}

/** Advertisement details update by id */
const updateDetails = async (advertisementId, updateBody) => {
    return Advertisement.findByIdAndUpdate(advertisementId, { $set: updateBody });
}

/** Delete advertisement */
const deleteAdvertisement = async (advertisementId) => {
    return Advertisement.findByIdAndDelete(advertisementId);
}

module.exports = {
    createAdvertisement,
    getAdvertisementList,
    getAdvertisementByName,
    getAdvertisementById,
    updateDetails,
    deleteAdvertisement,
};