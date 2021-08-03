const express = require('express')
const router = express.Router()
const ThingsController = require('../controllers/things-controller')

router.get('/', async (req, res) => {
    const response = {
        status: "OK",
        things: await ThingsController.getAll(),
        categories: ThingsController.getCategories(),
        locations: ThingsController.getLocations()
    }
    res.send(response)
})

module.exports = router