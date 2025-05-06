require('dotenv').config()
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express()

const SGAPI = process.env.SENDGRID_API;
sgMail.setApiKey(SGAPI);

app.use(cors());
app.use(express.json());


const PORT = 5000;

app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const msg = {
        to: 'hilldimension.lang@gmail.com',
        from: 'remyshema20@gmail.com',
        subject: 'Portfolio Form Submission',
        html: `    
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `
    }

    try {
        await sgMail.send(msg)
        res.status(200).send({message: 'Email sent successfully'});
    } catch(error) {
        res.status(500).send({error})
    }

})

app.listen(PORT, () => {
    console.log('Im running on port: ', PORT)
})

