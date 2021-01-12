const express = require("express");
const router = express.Router();

let reservations = [
    {
        _id: "1",
        person: "mick ultra",
        thing: "pils",
        start: "1/12/21",
        end: "1/18/21"
    },
    {
        _id: "2",
        person: "matty ice",
        thing: "piss",
        start: "1/16/21",
        end: "1/19/21"
    }
];

router.get('/', (req, res) => {
    const response = {
        reservations: reservations
    }
    res.send(response);
});

router.get('/:id', (req, res) => {
    const response = {
        reservation: reservations.find(r => r._id === req.params.id)
    }
    res.send(response);
});

router.put('/', (req, res) => {
    const r = {
        _id: `${reservations.length + 1}`,
        person: "Dilbert",
        thing: "leaf blower",
        start: "2/2/21",
        end: "2/3/21"
    }
    reservations.push(r);
    console.log(`Reservation created: ${r}`);

    const response = {
        id: r._id
    }
    res.send(response);
});

module.exports = router