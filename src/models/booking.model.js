const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        showtime: {
            type: mongoose.Types.ObjectId,
            ref: "Showtime",
        },
        num_ticket: {
            type: Number,
            trim: true
        },
        total_price: {
            type: Number,
            trim: true
        },
        booking_time: {
            type: Date(),
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

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking