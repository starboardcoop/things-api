const minify = require('../lib/minify');
const { categories } = require('../lib/constants');

const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE_ID);
const table = base('Things');

const getThings = (_, res) => {
    table.select({
        view: 'api_by_popularity',
        pageSize: 100
    }).all()
    .then(records => {
        res.send({
            things: records.map(minify),
            categories: categories
        });
    });
}

module.exports = {
    getThings
}