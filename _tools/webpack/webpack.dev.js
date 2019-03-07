const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

// Easy way to have colors in terminal

require("colors");

module.exports = require("./webpack.base")({
    mode: "development",

    // Add hot reloading in development
    entry: [
    // use that if you need to support IE11
    // require.resolve('react-app-polyfill/ie11'),
        path.join(process.cwd(), "src/app.js") // Start with js/app.js
    ],

    // Don't use hashes in dev mode for better performance
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js"
    },

    devServer: {
        contentBase: "./build"
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    // Add development plugins
    plugins: [
    // Tell webpack we want hot reloading
        new webpack.HotModuleReplacementPlugin(),

        // This simplifies creation of HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/index.html",
            filename: "./index.html"
        }),

        // Detect modules with circular dependencies when bundling with webpack.
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            cwd: process.cwd(),
            onDetected({ paths, compilation }) {
                compilation.errors.push(new Error(paths.join(" > ").red));
            }
        })
    ],

    // Emit a source map for easier debugging
    // See https://webpack.js.org/configuration/devtool/#devtool
    devtool: "eval-source-map",

    performance: {
        hints: false
    }
});
