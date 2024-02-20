const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        movie: {
            type: mongoose.Types.ObjectId,
            ref: "Movie",
        },
        rating: {
            type: Number,
            trim: true
        },
        comment: {
            type: String,
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

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review