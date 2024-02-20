const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema(
    {
        movie: {
            type: mongoose.Types.ObjectId,
            ref: "Movie",
        },
        theater: {
            type: mongoose.Types.ObjectId,
            ref: "Theater",
        },
        start_Time: {
            type: Date(),
            trim: true
        },
        end_Time: {
            type: Date(),
            trim: true
        },
        price: {
            type: Number,
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

const Showtime = mongoose.model("Showtime", showtimeSchema);

module.exports = Showtime