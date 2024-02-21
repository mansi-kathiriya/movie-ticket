const { Movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

/** get movie List */
const getMovieList = async (filter, options) => {
    return Movie.find()
};

/** Get movie by name */
const getMovieByName = async (movie_name) => {
    return Movie.findOne({ movie_name })
};

/** Get movie deatils by id */
const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
}

/** Movie details update by id */
const updateDetails = async (movieId, updateBody) => {
    return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
}

/** Delete movie */
const deleteMovie = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
}

module.exports = {
    createMovie,
    getMovieList,
    getMovieByName,
    getMovieById,
    updateDetails,
    deleteMovie,
};