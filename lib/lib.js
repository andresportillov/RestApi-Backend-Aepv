var randomstring = require("randomstring");

function generateId(len) {
    const string = randomstring.generate(len);
    return string
}

module.exports = { generateId }