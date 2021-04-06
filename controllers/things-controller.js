const diy = "DIY";
const entertainment = "Entertainment";
const cleaning = "Cleaning";
const yard = "Yard";
const outdoor = "Outdoor";
const sports = "Sports"

let data = [
    {
        id: "A",
        name: "Shovel",
        available: 1,
        category: yard,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fshovel.jpeg?v=1616536300969",
        price: "$20.00"
      
    },
    {
        id: "B",
        name: "Kayak",
        available: 2,
        category: outdoor,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2FKayak.jpg?v=1616536400383",
        price: "$300.00"
    },
    {
        id: "C",
        name: "Tennis Racket",
        available: 2,
        category: sports,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Ftennis-rack.jpg?v=1616536651404",
        price: "$70.00"
    },
    {
        id: "D",
        name: "Folding Table",
        available: 1,
        category: entertainment,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Ffolding-table.jpeg?v=1616536827490",
        price: "$30.00"
    },
    {
        id: "E",
        name: "Folding Chair",
        available: 4,
        category: entertainment,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Ffolding-chair.jpg?v=1616536828474",
        price: "$10.00"
    },
    {
        id: "F",
        name: "T-Shirt Heat Press",
        available: 1,
        category: diy,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2FTshirt-printer.jpg?v=1616537121084",
        price: "$280.00"
    },
    {
        id: "G",
        name: "Step Ladder",
        available: 1,
        category: diy,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fstep-ladder.jpg?v=1617240416841",
        price: "$280.00"
    }
]

const getAll = () => data

const getCategories = () => ["DIY", "Entertainment", "Yard", "Outdoor", "Sports"]

const getAvailable = () => data.filter(t => t.available > 0)

const get = (id) => data.find(t => t.id == id)

const add = (thingData) => {
    data.push(thingData)
    return thingData
}

const update = (id, thingData) => {
    let thing = data.find(t => t.id == id)
    thing.name = thingData.name
    thing.available = thingData.available

    data = data.filter(t => t.id != id)
    data.push(thing)
    return thing
}

const remove = (id) => {
    const thing = data.find(t => t.id == id)
    data = data.filter(t => t.id != id)
    return thing
}

module.exports = {
    getAll,
    getCategories,
    getAvailable,
    get,
    add,
    update,
    remove
}