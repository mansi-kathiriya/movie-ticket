const { showtimeService } = require("../services");

/** Create showtime */
const createShowtime = async (req, res) => {
    try {
        const reqBody = req.body;
        
        const showtime = await showtimeService.createShowtime(reqBody);

        res.status(200).json({
            success: true,
            message: "Showtime create successfully!",
            data: { showtime }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get showtime list */
const getShowtimeList = async (req, res) => {
    try {
        const getList = await showtimeService.getShowtimeList();

        res.status(200).json({
            success: true,
            message: "Get Showtime list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get showtime details by id */
const getShowtimeDetails = async (req, res) => {
    try {
        const getDetails = await showtimeService.getShowtimeById(
            req.params.showtimeId
        )
        if (!getDetails) {
            throw new Error("Showtime not found!");
        }

        res.status(200).json({
            success: true,
            message: "Showtime details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update showtime */
const updateDetails = async (req, res) => {
    try {
        const showtimeId = req.params.showtimeId;

        const showtimeExists = await showtimeService.getShowtimeById(showtimeId);
        if (!showtimeExists) {
            throw new Error("Showtime not found!")
        }

        await showtimeService.updateDetails(showtimeId, req.body);

        res.status(200).json({
            success: true,
            message: "Showtime details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete showtime */
const deleteShowtime = async (req, res) => {
    try {
        const showtimeId = req.params.showtimeId;

        const showtimeExists = await showtimeService.getShowtimeById(showtimeId);
        if (!showtimeExists) {
            throw new Error("Showtime not found!")
        }

        await showtimeService.deleteShowtime(showtimeId);

        res.status(200).json({
            success: true,
            message: "Showtime delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createShowtime,
    getShowtimeList,
    getShowtimeDetails,
    updateDetails,
    deleteShowtime
};