const { Ticket } = require("../models");

/**
 * Create ticket
 * @param {object} reqBody
 * @returns {Promise<Ticket>}
 */
const createTicket = async (reqBody) => {
    return Ticket.create(reqBody);
};

/** get ticket List */
const getTicketList = async (filter, options) => {
    return Ticket.find()
        .populate("booking")
        .populate("seat")
};

/** Get ticket deatils by id */
const getTicketById = async (ticketId) => {
    return Ticket.findById(ticketId);
}

/** Ticket details update by id */
const updateDetails = async (ticketId, updateBody) => {
    return Ticket.findByIdAndUpdate(ticketId, { $set: updateBody });
}

/** Delete ticket */
const deleteTicket = async (ticketId) => {
    return Ticket.findByIdAndDelete(ticketId);
}

module.exports = {
    createTicket,
    getTicketList,
    getTicketById,
    updateDetails,
    deleteTicket,
};