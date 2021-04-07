var Airtable = require('airtable') 
var base = new Airtable({ apiKey: 'key7xmscTskxd2T75' }).base('appBYEa4vGVLAXEbe')
var table = base('Things')

const getAll = async () => {
    const result =  await table.select({
        view: 'Grid view',
        fields: ["Name", "Category", "Stock", "Image"]
    }).firstPage()

    console.log(result)
    return result.map(minify)
}

const minify = (thing) => {
    return {
        id: thing.id,
        name: thing.fields.Name,
        categories: thing.fields.Category,
        image: getImage(thing.fields.Image),
        stock: thing.fields.Stock
    }
}

const getImage = (image) => {
    if (!image) return null
    return image[0].thumbnails.large.url
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