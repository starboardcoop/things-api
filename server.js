const express = require('express')
const app = express()
const thingsRoute = require('./routes/things')

app.get('/', (req, res) => {
    res.send('You have reached the Things API.')
})

app.use('/things', thingsRoute)

app.listen(3000, () => {
    console.log('Things API listening at http://localhost:3000')
})