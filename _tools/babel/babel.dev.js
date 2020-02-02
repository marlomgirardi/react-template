module.exports = api => {
    api.cache(true)

    const presets = [
        [
            // https://babeljs.io/docs/en/babel-preset-react
            '@babel/react',
            {
                development: true,
                throwIfNamespace: true
            }
        ],
        [
            // https://babeljs.io/docs/en/babel-preset-env
            '@babel/env',
            {
                debug: process.env.DEBUG === 'true',
                targets:
                    '> 5%, not ie 11, last 2 iOS versions, last 2 Safari versions,'
                    + 'last 2 Edge versions, last 2 firefox versions',
                modules: false,
                shippedProposals: true
            }
        ]
    ]

    const plugins = [
        // Plugin list: https://babeljs.io/docs/en/plugins

        // Maintain react state when hot reload
        'react-hot-loader/babel',

        // https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
        '@babel/plugin-proposal-class-properties',

        // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
        '@babel/plugin-proposal-optional-chaining',

        // https://www.styled-components.com/docs/tooling#usage
        [
            'babel-plugin-styled-components',
            {
                ssr: false,
                displayName: true,
                minify: false,
                pure: true,
                transpileTemplateLiterals: true
            }
        ],

        '@babel/plugin-transform-react-jsx-source' // Better stacks for error boundaries

        // Will I use?
        // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
        // https://babeljs.io/docs/en/babel-plugin-proposal-do-expressions
        // https://babeljs.io/docs/en/babel-plugin-proposal-function-bind
        // https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators
        // https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
        // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
    ]

    return {
        presets,
        plugins
    }
}
