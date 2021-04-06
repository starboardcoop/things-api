const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const thingsRoute = require('./routes/things')
const humansRoute = require('./routes/humans')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('You have reached the Things API.')
})

app.use('/things', thingsRoute)
app.use('/humans', humansRoute)

app.listen(3000, () => {
    console.log('Things API listening at http://localhost:3000')
})