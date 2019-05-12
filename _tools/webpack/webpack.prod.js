const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = require('./webpack.base')({
    mode: 'production',

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
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
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            excludeAssets: null, // {String\|RegExp\|function}
            logLevel: 'warn',
            openAnalyzer: false
        })
    ],

    devtool: false,

    performance: {
        hints: false
    }
})
