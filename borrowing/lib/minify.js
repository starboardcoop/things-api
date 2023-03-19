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

module.exports = minify