const express = require("express");

const userRoutes = require("./user.route");
const movieRoutes = require("./movie.route");
const theaterRoutes = require("./theater.route");
const showtimeRoutes = require("./showtime.route");
const bookingRoutes = require("./booking.route");
const ticketRoutes = require("./ticket.route");
const seatRoutes = require("./seat.route");
const reviewRoutes = require("./review.route");
const paymentRoutes = require("./payment.route");
const advertisementRoutes = require("./advertisement.route");
const screenRoutes = require("./screen.route");
const movielanguageRoutes = require("./movielanguage.route");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);
router.use("/theater", theaterRoutes);
router.use("/showtime", showtimeRoutes);
router.use("/booking", bookingRoutes);
router.use("/ticket", ticketRoutes);
router.use("/seat", seatRoutes);
router.use("/review", reviewRoutes);
router.use("/payment", paymentRoutes);
router.use("/advertisement", advertisementRoutes);
router.use("/screen", screenRoutes);
router.use("/movielanguage", movielanguageRoutes);

module.exports = router;