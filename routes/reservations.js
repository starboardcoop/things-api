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
    const { person, thing, start, end } = req.body;

    const id = (reservations.length + 1).toString();
    const r = {
        _id: id,
        person: person,
        thing: thing,
        start: start,
        end: end
    }
    reservations.push(r);
    console.log(`Reservation created: ${JSON.stringify(r)}`);

    const response = {
        id: id
    }
    res.send(response);
});

router.patch('/:id', (req, res) => {
    const { person, thing, start, end } = req.body;
    const id = req.params.id;

    let index = Number(id) - 1;
    reservations[index] = {
        _id: id,
        person: person,
        thing: thing,
        start: start,
        end: end
    }

    const response = {
        id: id
    }

    res.send(response);
});

module.exports = router