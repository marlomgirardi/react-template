const TerserPlugin = require('terser-webpack-plugin');

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
        minimizer: [
            // https://webpack.js.org/plugins/terser-webpack-plugin/
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },

    // Add production plugins
    plugins: [],

    devtool: false,

    performance: {
        hints: false
    }
});
