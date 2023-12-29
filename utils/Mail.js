const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host:mailhost ,
            auth: {
                user: Mail_User,
                pass: Mail.pass
            }
        });

        let info = await transporter.sendMail({
            from: 'From Edtech Platform - By Yash Chaudhari',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        });
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = mailSender;
