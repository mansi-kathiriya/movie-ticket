const { Seat } = require("../models");

/**
 * Create seat
 * @param {object} reqBody
 * @returns {Promise<Seat>}
 */
const createSeat = async (reqBody) => {
    return Seat.create(reqBody);
};

/** get seat List */
const getSeatList = async (filter, options) => {
    return Seat.find()
        .populate("theater")
};

/** Get seat deatils by id */
const getSeatById = async (seatId) => {
    return Seat.findById(seatId);
}

/** Seat details update by id */
const updateDetails = async (seatId, updateBody) => {
    return Seat.findByIdAndUpdate(seatId, { $set: updateBody });
}

/** Delete seat */
const deleteSeat = async (seatId) => {
    return Seat.findByIdAndDelete(seatId);
}

module.exports = {
    createSeat,
    getSeatList,
    getSeatById,
    updateDetails,
    deleteSeat,
};