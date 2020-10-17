const express = require('express')
const router = express.Router()

const thingsData = [
    {
        id: "A",
        name: "Impact driver",
        available: 2
    },
    {
        id: "B",
        name: "Ladder",
        available: 1
    },
    {
        id: "C",
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

router.get('/:id', (req, res) => {
    const thingId = req.params.id
    const response = {
        status: "OK",
        things: thingsData.find(t => t.id == thingId)
    }
    res.send(response)
})

module.exports = router