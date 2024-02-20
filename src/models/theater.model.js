const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema(
    {
        theater_name: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        capacity: {
            type: Number,
            trim: true
        },
        contact_info: {
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

const Theater = mongoose.model("Theater", theaterSchema);

module.exports = Theater