const express = require('express')
const router = express.Router()

const thingsData = [
    {
        name: "Impact driver",
        available: 2
    },
    {
        name: "Ladder",
        available: 1
    },
    {
        name: "Steam cleaner",
        available: 0
    }
]

router.get('/', (req, res) => {
    const response = {
        status: "OK",
        things: thingsData
    }
    res.send(response)
})

router.get('/available', (req, res) => {
    const response = {
        status: "OK",
        things: thingsData.filter(t => t.available > 0)
    }
    res.send(response)
})

module.exports = router