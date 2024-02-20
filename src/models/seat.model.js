const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
    {
        theater: {
            type: mongoose.Types.ObjectId,
            ref: "Theater",
        },
        seat_num: {
            type: Number,
            trim: true
        },
        is_booked:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat