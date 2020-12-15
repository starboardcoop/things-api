const diy = "DIY";
const entertainment = "Entertainment";
const cleaning = "Cleaning";
const yard = "Yard";

let data = [
    {
        id: "A",
        name: "Cordless Drill",
        available: 2,
        category: diy,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fcordless_drill.jpg?v=1604541586227",
        price: "$110.00"
      
    },
    {
        id: "B",
        name: "Ladder",
        available: 1,
        category: diy,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fladder.jpg?v=1604541588898",
        price: "$125.00"
    },
    {
        id: "C",
        name: "Steam Cleaner",
        available: 0,
        category: cleaning,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fsteam_cleaner.jpeg?v=1603759185569",
        price: "$469.00"
    },
    {
        id: "D",
        name: "Power Washer",
        available: 1,
        category: cleaning,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fpower_washer.jpg?v=1604541587606",
        price: "$300.00"
    },
    {
        id: "E",
        name: "Leaf Blower",
        available: 1,
        category: yard,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fleaf_blower.jpg?v=1604541584978",
        price: "$150.00"
    },
    {
        id: "F",
        name: "Projector",
        available: 1,
        category: entertainment,
        img: "https://cdn.glitch.com/0314da88-37cc-4087-8079-ca1655ac7544%2Fprojector.jpg?v=1604541590318",
        price: "$800.00"
    }
]

const getAll = () => data

const getCategories = () => ["DIY", "Entertainment", "Cleaning", "Yard"]

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