const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer with your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ivanna.aws@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'ivanna.aws@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ status: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Error sending email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
