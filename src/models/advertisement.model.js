const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema(
    {
        theater: {
            type: mongoose.Types.ObjectId,
            ref: "Theater",
        },
        advertiser_name: {
            type: String,
            trim: true
        },
        ad_desc: {
            type: String,
            trim: true
        },
        start_date: {
            type: Date,
            trim: true
        },
        end_date: {
            type: Date,
            trim: true
        },
        cost: {
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

const Advertisement = mongoose.model("Advertisement", advertisementSchema);

module.exports = Advertisement