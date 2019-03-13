module.exports = api => {
    api.cache(true);

    const presets = [
        '@babel/react',
        [
            '@babel/env', {
                targets: '> 5%, last 2 Safari versions and > .5%, last 2 Edge versions and > .5%'
            }
        ]
    ];

    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining'
    ];

    return {
        presets,
        plugins
    };
};
