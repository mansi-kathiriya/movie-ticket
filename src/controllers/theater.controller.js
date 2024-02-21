const { theaterService } = require("../services");

/** Create theater */
const createTheater = async (req, res) => {
    try {
        const reqBody = req.body;

        const theaterExists = await theaterService.getTheaterByName(reqBody);
        if (theaterExists) {
            throw new Error("please add other Theater this Theater already created.");
        }

        const theater = await theaterService.createTheater(reqBody);

        res.status(200).json({
            success: true,
            message: "Theater create successfully!",
            data: { theater }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get theater list */
const getTheaterList = async (req, res) => {
    try {
        const getList = await theaterService.getTheaterList();

        res.status(200).json({
            success: true,
            message: "Get Theater list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get theater details by id */
const getTheaterDetails = async (req, res) => {
    try {
        const getDetails = await theaterService.getTheaterById(
            req.params.theaterId
        )
        if (!getDetails) {
            throw new Error("Theater not found!");
        }

        res.status(200).json({
            success: true,
            message: "Theater details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update theater */
const updateDetails = async (req, res) => {
    try {
        const theaterId = req.params.theaterId;

        const theaterExists = await theaterService.getTheaterById(theaterId);
        if (!theaterExists) {
            throw new Error("Theater not found!")
        }

        await theaterService.updateDetails(theaterId, req.body);

        res.status(200).json({
            success: true,
            message: "Theater details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete theater */
const deleteTheater = async (req, res) => {
    try {
        const theaterId = req.params.theaterId;

        const theaterExists = await theaterService.getTheaterById(theaterId);
        if (!theaterExists) {
            throw new Error("Theater not found!")
        }

        await theaterService.deleteTheater(theaterId);

        res.status(200).json({
            success: true,
            message: "Theater delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createTheater,
    getTheaterList,
    getTheaterDetails,
    updateDetails,
    deleteTheater
};