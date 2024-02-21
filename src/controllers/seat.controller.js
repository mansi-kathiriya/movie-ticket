const { seatService } = require("../services");

/** Create seat */
const createSeat = async (req, res) => {
    try {
        const reqBody = req.body;

        const seat = await seatService.createSeat(reqBody);

        res.status(200).json({
            success: true,
            message: "Seat create successfully!",
            data: { seat }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get seat list */
const getSeatList = async (req, res) => {
    try {
        const getList = await seatService.getSeatList();

        res.status(200).json({
            success: true,
            message: "Get Seat list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get seat details by id */
const getSeatDetails = async (req, res) => {
    try {
        const getDetails = await seatService.getSeatById(
            req.params.seatId
        )
        if (!getDetails) {
            throw new Error("Seat not found!");
        }

        res.status(200).json({
            success: true,
            message: "Seat details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update seat */
const updateDetails = async (req, res) => {
    try {
        const seatId = req.params.seatId;

        const seatExists = await seatService.getSeatById(seatId);
        if (!seatExists) {
            throw new Error("Seat not found!")
        }

        await seatService.updateDetails(seatId, req.body);

        res.status(200).json({
            success: true,
            message: "Seat details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete seat */
const deleteSeat = async (req, res) => {
    try {
        const seatId = req.params.seatId;

        const seatExists = await seatService.getSeatById(seatId);
        if (!seatExists) {
            throw new Error("Seat not found!")
        }

        await seatService.deleteSeat(seatId);

        res.status(200).json({
            success: true,
            message: "Seat delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createSeat,
    getSeatList,
    getSeatDetails,
    updateDetails,
    deleteSeat
};