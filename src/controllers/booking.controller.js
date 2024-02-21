const { bookingService } = require("../services");

/** Create booking */
const createBooking = async (req, res) => {
    try {
        const reqBody = req.body;
        
        const booking = await bookingService.createBooking(reqBody);

        res.status(200).json({
            success: true,
            message: "Booking create successfully!",
            data: { booking }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get booking list */
const getBookingList = async (req, res) => {
    try {
        const getList = await bookingService.getBookingList();

        res.status(200).json({
            success: true,
            message: "Get Booking list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get booking details by id */
const getBookingDetails = async (req, res) => {
    try {
        const getDetails = await bookingService.getBookingById(
            req.params.bookingId
        )
        if (!getDetails) {
            throw new Error("Booking not found!");
        }

        res.status(200).json({
            success: true,
            message: "Booking details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update booking */
const updateDetails = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        const bookingExists = await bookingService.getBookingById(bookingId);
        if (!bookingExists) {
            throw new Error("Booking not found!")
        }

        await bookingService.updateDetails(bookingId, req.body);

        res.status(200).json({
            success: true,
            message: "Booking details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete booking */
const deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        const bookingExists = await bookingService.getBookingById(bookingId);
        if (!bookingExists) {
            throw new Error("Booking not found!")
        }

        await bookingService.deleteBooking(bookingId);

        res.status(200).json({
            success: true,
            message: "Booking delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createBooking,
    getBookingList,
    getBookingDetails,
    updateDetails,
    deleteBooking
};