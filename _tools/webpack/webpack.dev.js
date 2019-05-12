const CircularDependencyPlugin = require('circular-dependency-plugin')

// Easy way to have colors in terminal
require('colors')

module.exports = require('./webpack.base')({
    mode: 'development',

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    devServer: {
        contentBase: './dist'
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    // Add development plugins
    plugins: [
        // Detect modules with circular dependencies when bundling with webpack.
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            cwd: process.cwd(),
            onDetected({ paths, compilation }) {
                compilation.errors.push(new Error(paths.join(' > ').red))
            }
        })
    ],

    // Emit a source map for easier debugging
    // See https://webpack.js.org/configuration/devtool/#devtool
    devtool: 'eval-source-map',

    performance: {
        hints: false
    }
})
