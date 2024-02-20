const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
    {
        booking: {
            type: mongoose.Types.ObjectId,
            ref: "Booking",
        },
        seat: {
            type: mongoose.Types.ObjectId,
            ref: "Seat",
        },
        price: {
            type: Number,
            trim: true
        },
        status: {
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

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket