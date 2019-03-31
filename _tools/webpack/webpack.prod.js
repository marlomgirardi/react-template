module.exports = require('./webpack.base')({
    mode: 'production',

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true

        // minimizer,
        // https://webpack.js.org/configuration/optimization/#optimizationminimizer
    },

    // Add production plugins
    plugins: [],

    devtool: false,

    performance: {
        hints: false
    }
});
