const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "mansikathiriya08@gmail.com",
        pass: "opyk ogdy ljls jkrz",
    },
});

/** send mail */
const send_mail = async (to, data, subject) => {
    try {
        return transport.sendMail({
            from: "valarenuka32gmail.com",
            to,
            subject,
            html: data
        });
    } catch (error) {
        return false
    }
}

module.exports = {
    send_mail,
}