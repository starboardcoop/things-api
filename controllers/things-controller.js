var Airtable = require('airtable') 
var base = new Airtable({ apiKey: 'key7xmscTskxd2T75' }).base('appBYEa4vGVLAXEbe')
const table = base('Things')

const getThings = (req, res) => {
    let records = []

    // called for every page of records
    const processPage = (partialRecords, fetchNextPage) => {
        records = [...records, ...partialRecords]
        fetchNextPage()
    }

    // called when all the records have been retrieved
    const processRecords = (err) => {
        if (err) {
            console.error(err)
            res.send({
                status: "ERROR",
                error: err
            })
            return
        }

        let things = records.map(minify)
        res.send({
            status: "OK",
            things: things,
            categories: getCategories(),
            locations: getLocations()
        })
    }

    table.select({
        view: 'All Things',
        fields: ["Name", "Category", "Stock", "Location", "Image"],
        filterByFormula: "NOT({Hidden})",
        pageSize: 100
    }).eachPage(processPage, processRecords)
}

const minify = (thing) => {
    return {
        id: thing.id,
        name: thing.fields.Name,
        categories: thing.fields.Category,
        image: getImage(thing.fields.Image),
        stock: thing.fields.Stock,
        location: thing.fields.Location
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

const getLocations = () => {
    return [
        "Storage",
        "PPL"
    ]
}

module.exports = {
    getThings
}