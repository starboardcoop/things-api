const express = require('express')
const router = express.Router()

let thingsData = [
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
        thing: thingsData.find(t => t.id == thingId)
    }
    res.send(response)
})

router.post('/', (req, res) => {
    const thing = req.body
    thingsData.push(thing)
    
    const response = {
        status: "OK",
        thing: thing
    }
    res.send(response)
})

router.put('/:id', (req, res) => {
    const thingId = req.params.id
    const updatedThing = req.body

    let thing = thingsData.find(t => t.id == thingId)
    thing.name = updatedThing.name
    thing.available = updatedThing.available

    thingsData = thingsData.filter(t => t.id != thingId)
    thingsData.push(thing)

    const response = {
        status: "OK",
        thing: thing
    }
    res.send(response)
})

router.delete('/:id', (req, res) => {
    const thingId = req.params.id
    const thing = thingsData.find(t => t.id == thingId)
    thingsData = thingsData.filter(t => t.id != thingId)

    const response = {
        status: "OK",
        thing: thing
    }
    res.send(response)
})

module.exports = router