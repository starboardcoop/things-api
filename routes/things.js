const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const things = {
        status: "OK",
        things: [
            "Impact driver",
            "Ladder",
            "Steam cleaner"
        ]
    }
    res.send(things)
})

module.exports = router