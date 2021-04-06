var Airtable = require('airtable') 
var base = new Airtable({ apiKey: 'key7xmscTskxd2T75' }).base('appBYEa4vGVLAXEbe')
var table = base('Things')

const getAll = async () => {
    const result =  await table.select({
        view: 'Grid view',
        fields: ["Name", "Category", "Stock", "Image"]
    }).firstPage()

    return result.map(minify)
}

const minify = (thing) => {
    return {
        name: thing.fields.Name,
        id: thing.id,
        categories: thing.fields.Category
    }
}

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