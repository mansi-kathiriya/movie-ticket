const { screenService } = require("../services");

/** Create screen */
const createScreen = async (req, res) => {
    try {
        const reqBody = req.body;

        const screen = await screenService.createScreen(reqBody);

        res.status(200).json({
            success: true,
            message: "Screen create successfully!",
            data: { screen }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get screen list */
const getScreenList = async (req, res) => {
    try {
        const getList = await screenService.getScreenList();

        res.status(200).json({
            success: true,
            message: "Get Screen list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get screen details by id */
const getScreenDetails = async (req, res) => {
    try {
        const getDetails = await screenService.getScreenById(
            req.params.screenId
        )
        if (!getDetails) {
            throw new Error("Screen not found!");
        }

        res.status(200).json({
            success: true,
            message: "Screen details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update screen */
const updateDetails = async (req, res) => {
    try {
        const screenId = req.params.screenId;

        const screenExists = await screenService.getScreenById(screenId);
        if (!screenExists) {
            throw new Error("Screen not found!")
        }

        await screenService.updateDetails(screenId, req.body);

        res.status(200).json({
            success: true,
            message: "Screen details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete screen */
const deleteScreen = async (req, res) => {
    try {
        const screenId = req.params.screenId;

        const screenExists = await screenService.getScreenById(screenId);
        if (!screenExists) {
            throw new Error("Screen not found!")
        }

        await screenService.deleteScreen(screenId);

        res.status(200).json({
            success: true,
            message: "Screen delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createScreen,
    getScreenList,
    getScreenDetails,
    updateDetails,
    deleteScreen
};