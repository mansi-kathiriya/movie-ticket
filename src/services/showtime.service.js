const { Showtime } = require("../models");

/**
 * Create showtime
 * @param {object} reqBody
 * @returns {Promise<Showtime>}
 */
const createShowtime = async (reqBody) => {
    return Showtime.create(reqBody);
};

/** get showtime List */
const getShowtimeList = async (filter, options) => {
    return Showtime.find()
        .populate("movie")
        .populate("theater")
};

/** Get showtime deatils by id */
const getShowtimeById = async (showtimeId) => {
    return Showtime.findById(showtimeId);
}

/** Showtime details update by id */
const updateDetails = async (showtimeId, updateBody) => {
    return Showtime.findByIdAndUpdate(showtimeId, { $set: updateBody });
}

/** Delete showtime */
const deleteShowtime = async (showtimeId) => {
    return Showtime.findByIdAndDelete(showtimeId);
}

module.exports = {
    createShowtime,
    getShowtimeList,
    getShowtimeById,
    updateDetails,
    deleteShowtime,
};