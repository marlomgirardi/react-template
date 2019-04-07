module.exports = {
    parser: 'babel-eslint',

    plugins: ['jsdoc'],

    env: {
        browser: true,
        es6: true,
        jest: true
    },

    extends: require('./_tools/eslint'),

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    }
};
