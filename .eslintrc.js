const path = require("path");

module.exports = {
    settings: {
        // Follow webpack resolver roles, it includes DirectoryNamedWebpackPlugin
        "import/resolver": {
            webpack: {
                config: path.resolve(
                    __dirname,
                    "_tools/webpack/webpack.dev.js"
                ),
            },
        },
    },

    env: {
        browser: true,
        es6: true,
        jest: true,
    },

    extends: ["mg/babel", "mg/react", "prettier", "prettier/react"],

    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
};
