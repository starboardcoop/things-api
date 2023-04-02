require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const things = require('./borrowing/routes/things')
const lending = require('./lending')

app.use(bodyParser.json())

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, supabase-access-token, supabase-refresh-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH")
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Private-Network", "true");
    next();
})

app.get('/', (_, res) => {
    res.send('You have reached the Things API')
})

app.use('/things', things)
app.use('/lending', lending)

app.listen(8080, () => {
    console.log('Things API listening at http://localhost:8080')
})