const express = require("express");
const { ticketValidation } = require("../../validations");
const { ticketController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create ticket */
router.post(
    "/create-ticket",
    validate(ticketValidation.createTicket),
    ticketController.createTicket
);

/** Get ticket list */
router.get(
    "/ticket-list",
    ticketController.getTicketList
);

/** Get ticket details by id */
router.get(
    "/ticket-details/:ticketId",
    ticketController.getTicketDetails,
);

/** Update ticket */
router.put(
    "/update-details/:ticketId",
    ticketController.updateDetails,
);

/** Delete ticket */
router.delete(
    "/ticket-delete/:ticketId",
    ticketController.deleteTicket,
);

module.exports = router;