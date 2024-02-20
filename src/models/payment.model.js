const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        booking: {
            type: mongoose.Types.ObjectId,
            ref: "Booking",
        },
        payment_method: {
            type: String,
            trim: true
        },
        payment_status: {
            type: String,
            trim: true
        },
        payment_time: {
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

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment