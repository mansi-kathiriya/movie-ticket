const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect("mongodb+srv://mansikathiriya08:2NkH2SDvPDlZXWKN@mansi.lyd7vxy.mongodb.net/zomato?retryWrites=true&w=majority")
        .then((data) => {
             console.log("Database connected successfully!");
        })
        .catch((error) => {
             console.log("Database connection error: ",error);
        })
}

module.exports = { connectDB };