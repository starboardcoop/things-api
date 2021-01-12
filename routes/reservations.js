const express = require("express");
const router = express.Router();

let reservations = [{
    person: "mick ultra",
    thing: "pils",
    start: "1/12/21",
    end: "1/18/21"
}];

router.get('/', (req, res) => {
    const response = {
        reservations: reservations
    }
    res.send(response);
});

module.exports = router