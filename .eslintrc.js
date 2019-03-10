module.exports = {
    env: {
        browser: true
    },

    extends: require('./_tools/eslint'),

    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    }
};
