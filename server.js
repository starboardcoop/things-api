const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const thingsRoute = require('./routes/things')
const humansRoute = require('./routes/humans')
const reservationsRoute = require('./routes/reservations')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('You have reached the Things API.')
})

app.use('/things', thingsRoute)
app.use('/humans', humansRoute)
app.use('/reservations', reservationsRoute)

app.listen(3000, () => {
    console.log('Things API listening at http://localhost:3000')
})