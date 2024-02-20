const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
    {
        theater: {
            type: mongoose.Types.ObjectId,
            ref: "Theater",
        },
        screen_number: {
            type: Number,
            trim: true
        },
        capacity: {
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

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen