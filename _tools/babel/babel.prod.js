module.exports = () => {
    const presets = [
        '@babel/react',
        [
            '@babel/env',
            {
                targets: '> 5%, last 2 Safari versions and > .5%, last 2 Edge versions and > .5%'
            }
        ]
    ]

    const plugins = [
        // https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
        '@babel/plugin-proposal-class-properties',

        // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
        '@babel/plugin-proposal-optional-chaining',

        // Remove console from the code (except error and warn)
        [
            'transform-remove-console',
            {
                exclude: ['error', 'warn']
            }
        ],

        // https://www.styled-components.com/docs/tooling#usage
        [
            'babel-plugin-styled-components',
            {
                ssr: false,
                displayName: false,
                minify: true,
                pure: true,
                transpileTemplateLiterals: true
            }
        ]
    ]

    return {
        presets,
        plugins
    }
}
