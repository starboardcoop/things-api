var Airtable = require('airtable') 
var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE_ID)
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
            categories: getCategories()
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
        stock: thing.fields.Stock
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
    getThings
}