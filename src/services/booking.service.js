const { Booking } = require("../models");

/**
 * Create booking
 * @param {object} reqBody
 * @returns {Promise<Booking>}
 */
const createBooking = async (reqBody) => {
    return Booking.create(reqBody);
};

/** get booking List */
const getBookingList = async (filter, options) => {
    return Booking.find()
        .populate("user")
        .populate("showtime")
};

/** Get booking deatils by id */
const getBookingById = async (bookingId) => {
    return Booking.findById(bookingId);
}

/** Booking details update by id */
const updateDetails = async (bookingId, updateBody) => {
    return Booking.findByIdAndUpdate(bookingId, { $set: updateBody });
}

/** Delete booking */
const deleteBooking = async (bookingId) => {
    return Booking.findByIdAndDelete(bookingId);
}

module.exports = {
    createBooking,
    getBookingList,
    getBookingById,
    updateDetails,
    deleteBooking,
};