require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const things = require('./routes/things')

app.use(bodyParser.json())

app.use((req, res, next) => {
    const apiKey = process.env.API_KEY
    const clientKey = req.headers['key']
    
    if (apiKey !== clientKey) {
        res.status(401).send()
    } else {
        next()
    }
})

app.get('/', (_, res) => {
    res.send('You have reached the Things API')
})

app.use('/things', things)

app.listen(3000, () => {
    console.log('Things API listening at http://localhost:3000')
})