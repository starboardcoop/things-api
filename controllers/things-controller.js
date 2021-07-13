var Airtable = require('airtable') 
var base = new Airtable({ apiKey: 'key7xmscTskxd2T75' }).base('appBYEa4vGVLAXEbe')
const table = base('Things')
const inventory = base('Inventory')

const getAll = async () => {
    const result =  await table.select({
        view: 'Grid view',
        fields: ["Name", "Category", "Stock", "Image"],
        filterByFormula: "NOT({Hidden})"
    }).firstPage()

    return result.map(minify)
}

const getPPLInventory = async () => {
    const result =  await inventory.select({
        view: 'Things @ PPL',
        fields: ["Thing", "Location", "Brand", "Description", "Replacement Fee"]
    }).firstPage()

    return result.map(minifyPPL)
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

const minifyPPL = (thing) => {
    return {
        thing: thing.thing,
        location: thing.fields.Location,
        brand: thing.fields.Brand,
        description: thing.fields.Description,
        replacementFee: thing.fields.ReplacementFee
    }
}

const getImage = (image) => {
    if (!image) return null
    return image[0].thumbnails.large.url
}

const getCategories = () => {
    return [
        "DIY",
        "Media",
        "Games",
        "Outdoors",
        "Sports",
        "Entertainment",
        "Yard",
        "Cleaning",
        "Cooking",
        "Crafts",
        "Pet",
        "Automotive",
        "Health"
    ]
}

module.exports = {
    getAll,
    getCategories,
    getPPLInventory 
}