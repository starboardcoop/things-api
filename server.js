const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const thingsRoute = require('./routes/things')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('You have reached the Things API.')
})

app.use('/things', thingsRoute)

app.listen(3000, () => {
    console.log('Things API listening at http://localhost:3000')
})