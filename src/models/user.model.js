const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true
        },
        contact: {
            type: Number,
            trim: true
        },
        role:{
            type: String,
            required: true,
            enum: ["admin", "user"],
            default: "user"
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

const User = mongoose.model("User", userSchema);

module.exports = User