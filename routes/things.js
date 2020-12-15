const express = require('express')
const router = express.Router()
const ThingsController = require('../controllers/things-controller')

router.get('/', (req, res) => {
    const response = {
        status: "OK",
        things: ThingsController.getAll(),
        categories: ThingsController.getCategories()
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

module.exports = router