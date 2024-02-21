const { movielanguageService } = require("../services");

/** Create movie language */
const createMovieLanguage = async (req, res) => {
    try {
        const reqBody = req.body;

        const movielanguageExists = await movielanguageService.getMovieLanguageByName(reqBody);
        if (movielanguageExists) {
            throw new Error("please add other Movie language this Movie language already created.");
        }

        const movielanguage = await movielanguageService.createMovieLanguage(reqBody);

        res.status(200).json({
            success: true,
            message: "Movie language create successfully!",
            data: { movielanguage }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get movie language list */
const getMovieLanguageList = async (req, res) => {
    try {
        const getList = await movielanguageService.getMovieLanguageList();

        res.status(200).json({
            success: true,
            message: "Get Movie language list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get movie language details by id */
const getMovieLanguageDetails = async (req, res) => {
    try {
        const getDetails = await movielanguageService.getMovieLanguageById(
            req.params.movielanguageId
        )
        if (!getDetails) {
            throw new Error("Movie language not found!");
        }

        res.status(200).json({
            success: true,
            message: "Movie language details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update movie language */
const updateDetails = async (req, res) => {
    try {
        const movielanguageId = req.params.movielanguageId;

        const movielanguageExists = await movielanguageService.getMovieLanguageById(movielanguageId);
        if (!movielanguageExists) {
            throw new Error("Movie language not found!")
        }

        await movielanguageService.updateDetails(movielanguageId, req.body);

        res.status(200).json({
            success: true,
            message: "Movie language details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete movie language */
const deleteMovieLanguage = async (req, res) => {
    try {
        const movielanguageId = req.params.movielanguageId;

        const movielanguageExists = await movielanguageService.getMovieLanguageById(movielanguageId);
        if (!movielanguageExists) {
            throw new Error("Movie language not found!")
        }

        await movielanguageService.deleteMovieLanguage(movielanguageId);

        res.status(200).json({
            success: true,
            message: "Movie language delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createMovieLanguage,
    getMovieLanguageList,
    getMovieLanguageDetails,
    updateDetails,
    deleteMovieLanguage
};