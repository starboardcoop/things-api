const { tokens } = require('./store');

const authorize = (token) => {
    tokens[token] = {
        valid: true
    };
};

const isAuthorized = (token) => {
    return Object.keys(tokens).includes(token);
};

const isWhitelisted = (email) => {
    const whitelist = process.env.DISCORD_WHITELIST.split(' ');
    return whitelist.includes(email);
};

module.exports = {
    authorize,
    isAuthorized,
    isWhitelisted
};