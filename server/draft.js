const express = require('express');
const app = express()

const PORT = 5000;

app.get('/getusers', (req, res) => {
    res.send({message: "Im in get routes"})
})

app.post('/postusers', (req, res) => {
    res.send({message: "Im in post route"})
})

app.listen(PORT, () => {
    console.log('Im running on port: ', PORT)
})

