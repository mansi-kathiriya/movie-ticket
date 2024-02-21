const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true
        },
        desc: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        duration: {
            type: String,
            trim: true
        },
        director: {
            type: String,
            trim: true
        },
        release_date: {
            type: Date,
            trim: true
        },
        is_active:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie