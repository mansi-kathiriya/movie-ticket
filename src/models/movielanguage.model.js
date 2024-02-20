const mongoose = require("mongoose");

const m_languageSchema = new mongoose.Schema(
    {
        movie: {
            type: mongoose.Types.ObjectId,
            ref: "Movie",
        },
        language_name: {
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

const M_language = mongoose.model("movie language", m_languageSchema);

module.exports = M_language