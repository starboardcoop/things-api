
const allThings = [
    {
        name: 'Projector',
        category: 'entertainment',
        quantity: 1,
        available: 1
    },
    {
        name: '10-foot Ladder',
        category: 'DIY',
        quantity: 2,
        available: 1
    },
    {
        name: 'Impact Gun',
        category: 'DIY',
        quantity: 2,
        available: 0
    }
];

function all(): any {
    return {
        things: allThings
    };
}

function allAvailable(): any {
    return {
        things: allThings.filter((t) => t.available > 0)
    }
}

export {
    all,
    allAvailable
};