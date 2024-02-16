const express = require("express");
const { userController } = require("../../controllers");
const { userValidation } = require("../../validations");
const validate = require("../../middleware/validate");

const router = express.Router();

//  register
router.post(
    "/register", 
    validate(userValidation.Register), 
    userController.register
);

// login user
router.post(
    "/login", 
    userController.login
)

module.exports = router;