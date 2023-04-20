const isWhitelisted = (email) => {
    const whitelist = process.env.DISCORD_WHITELIST.split(' ');
    return whitelist.includes(email);
};

module.exports = {
    isWhitelisted
};