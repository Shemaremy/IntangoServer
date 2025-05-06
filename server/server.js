const express = require('express');
const cors = require('cors');

const app = express()


app.use(cors());
app.use(express.json());


const PORT = 5000;

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(req.body);
})

app.listen(PORT, () => {
    console.log('Im running on port: ', PORT)
})

