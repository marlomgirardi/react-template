const fs = require('fs')

// Auto load every eslint file in this directory
module.exports = fs
    .readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .map(file => require.resolve(`./${file}`))
