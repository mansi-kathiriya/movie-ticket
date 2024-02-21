const express = require("express");
const { userController } = require("../../controllers");
const { userValidation } = require("../../validations");
const validate = require("../../middleware/validate");

const router = express.Router();

/** register user */
router.post(
    "/register",
    validate(userValidation.Register),
    userController.register
);

/**  login user */
router.post(
    "/login",
    userController.login
)

/** Get user */
router.get(
    "/user-list",
    userController.getUserList
)

/** Get user details by id */
router.get(
    "/user-details/:userId",
    userController.getUserDetails
)

/** update user */
router.put(
    "/update-details/:userId",
    userController.updateDetails
)

/** Delete user */
router.delete(
    "/user-delete/:userId",
    userController.deleteUser
)

module.exports = router;