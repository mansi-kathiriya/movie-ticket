const { advertisementService } = require("../services");

/** Create advertisement */
const createAdvertisement = async (req, res) => {
    try {
        const reqBody = req.body;

        const advertisementExists = await advertisementService.getAdvertisementByName(reqBody);
        if (advertisementExists) {
            throw new Error("please add other Advertisement this Advertisement already created.");
        }

        const advertisement = await advertisementService.createAdvertisement(reqBody);

        res.status(200).json({
            success: true,
            message: "Advertisement create successfully!",
            data: { advertisement }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get advertisement list */
const getAdvertisementList = async (req, res) => {
    try {
        const getList = await advertisementService.getAdvertisementList();

        res.status(200).json({
            success: true,
            message: "Get advertisement list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get advertisement details by id */
const getAdvertisementDetails = async (req, res) => {
    try {
        const getDetails = await advertisementService.getAdvertisementById(
            req.params.advertisementId
        )
        if (!getDetails) {
            throw new Error("Advertisement not found!");
        }

        res.status(200).json({
            success: true,
            message: "Advertisement details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update advertisement */
const updateDetails = async (req, res) => {
    try {
        const advertisementId = req.params.advertisementId;

        const advertisementExists = await advertisementService.getAdvertisementById(advertisementId);
        if (!advertisementExists) {
            throw new Error("Advertisement not found!")
        }

        await advertisementService.updateDetails(advertisementId, req.body);

        res.status(200).json({
            success: true,
            message: "Advertisement details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete advertisement */
const deleteAdvertisement = async (req, res) => {
    try {
        const advertisementId = req.params.advertisementId;

        const advertisementExists = await advertisementService.getAdvertisementById(advertisementId);
        if (!advertisementExists) {
            throw new Error("Advertisement not found!")
        }

        await advertisementService.deleteAdvertisement(advertisementId);

        res.status(200).json({
            success: true,
            message: "Advertisement delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createAdvertisement,
    getAdvertisementList,
    getAdvertisementDetails,
    updateDetails,
    deleteAdvertisement
};