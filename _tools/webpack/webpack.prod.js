const webpack = require('webpack');

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
        }
    },

    // Add production plugins
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    devtool: false,

    performance: {
        hints: false
    }
});
