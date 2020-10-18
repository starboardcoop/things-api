let data = [
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

const getAll = () => data

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
    const thing = thingsData.find(t => t.id == id)
    thingsData = thingsData.filter(t => t.id != id)
    return thing
}

module.exports = {
    getAll,
    getAvailable,
    get,
    add,
    update,
    remove
}