const loadProduction = require('./_tools/babel/babel.prod');
const loadDevelopment = require('./_tools/babel/babel.dev');

module.exports = function (api) {
    return {
        env: {
            development: loadDevelopment(api),
            production: loadProduction(api)
        }
    };
};
