const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'bernhard25@ethereal.email',
        pass: '6e16DTspDTuSZyhe4F'
    }
});

const postContact = async (req,res) => {

    const { subject, email, message } = req.body;

    const mailOptions = {
        from: "noreply",
        to: "d@gmail.com",
        subject: `Contact Form Submission: ${subject}`,
        text: `You have received a new message from your contact form:\n\n
            Email: ${email}\n
            Message: ${message}\n`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: error.toString() });
            }
            res.status(200).json({ message: "Email sent: " + info.response });
        });   
}

module.exports = {
    postContact 
}