const { ticketService } = require("../services");

/** Create ticket */
const createTicket = async (req, res) => {
    try {
        const reqBody = req.body;

        const ticket = await ticketService.createTicket(reqBody);

        res.status(200).json({
            success: true,
            message: "Ticket create successfully!",
            data: { ticket }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get ticket list */
const getTicketList = async (req, res) => {
    try {
        const getList = await ticketService.getTicketList();

        res.status(200).json({
            success: true,
            message: "Get Ticket list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get ticket details by id */
const getTicketDetails = async (req, res) => {
    try {
        const getDetails = await ticketService.getTicketById(
            req.params.ticketId
        )
        if (!getDetails) {
            throw new Error("Ticket not found!");
        }

        res.status(200).json({
            success: true,
            message: "Ticket details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update ticket */
const updateDetails = async (req, res) => {
    try {
        const ticketId = req.params.ticketId;

        const ticketExists = await ticketService.getTicketById(ticketId);
        if (!ticketExists) {
            throw new Error("Ticket not found!")
        }

        await ticketService.updateDetails(ticketId, req.body);

        res.status(200).json({
            success: true,
            message: "Ticket details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete ticket */
const deleteTicket = async (req, res) => {
    try {
        const ticketId = req.params.ticketId;

        const ticketExists = await ticketService.getTicketById(ticketId);
        if (!ticketExists) {
            throw new Error("Ticket not found!")
        }

        await ticketService.deleteTicket(ticketId);

        res.status(200).json({
            success: true,
            message: "Ticket delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createTicket,
    getTicketList,
    getTicketDetails,
    updateDetails,
    deleteTicket
};