module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/react',
        [ '@babel/preset-env', { targets: '> 5%, last 2 Safari versions and > .5%, last 2 Edge versions and > .5%' } ]
    ];

    const plugins = [
        // Plugin list: https://babeljs.io/docs/en/plugins

        // https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
        '@babel/plugin-proposal-class-properties',

        // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
        '@babel/plugin-proposal-optional-chaining'

        // Will I use?
        // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
        // https://babeljs.io/docs/en/babel-plugin-proposal-do-expressions
        // https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
        // https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from
        // https://babeljs.io/docs/en/babel-plugin-proposal-function-bind
        // https://babeljs.io/docs/en/babel-plugin-proposal-function-sent
        // https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators
        // https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
        // https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator
        // https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator
        // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
        // https://babeljs.io/docs/en/babel-plugin-proposal-throw-expressions
        // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
    ];

    return {
        presets,
        plugins
    };
};
