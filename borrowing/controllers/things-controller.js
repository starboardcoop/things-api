const minify = require('../lib/minify')
const { categories } = require('../lib/constants')

const Airtable = require('airtable') 
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE_ID)
const table = base('Things')

const getThings = (_, res) => {
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

        res.send({
            things: records.map(minify),
            categories: categories
        })
    }

    table.select({
        view: 'api_by_popularity',
        pageSize: 100
    }).eachPage(processPage, processRecords)
}

module.exports = {
    getThings
}