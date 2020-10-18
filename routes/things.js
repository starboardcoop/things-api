const express = require('express')
const router = express.Router()
const ThingsController = require('../controllers/things-controller')

router.get('/', (req, res) => {
    const response = {
        status: "OK",
        things: ThingsController.getAll()
    }
    res.send(response)
})

router.get('/available', (req, res) => {
    const response = {
        status: "OK",
        things: ThingsController.getAvailable()
    }
    res.send(response)
})

router.get('/:id', (req, res) => {
    const thingId = req.params.id
    const response = {
        status: "OK",
        thing: ThingsController.get(thingId)
    }
    res.send(response)
})

router.post('/', (req, res) => {
    const response = {
        status: "OK",
        thing: ThingsController.add(req.body)
    }
    res.send(response)
})

router.put('/:id', (req, res) => {
    const thingId = req.params.id
    const updatedThing = req.body

    const response = {
        status: "OK",
        thing: ThingsController.update(thingId, updatedThing)
    }
    res.send(response)
})

router.delete('/:id', (req, res) => {
    const thingId = req.params.id

    const response = {
        status: "OK",
        thing: ThingsController.remove(thingId)
    }
    res.send(response)
})

module.exports = router