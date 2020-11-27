const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = require("./webpack.base")({
    mode: "production",

    devtool: false,

    // Don't use hashes in dev mode for better performance
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js",
    },

    // More optimization details here: https://webpack.js.org/configuration/optimization/
    optimization: {},

    // Add production plugins
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            excludeAssets: null, // {String\|RegExp\|function}
            logLevel: "warn",
            openAnalyzer: false,
        }),
    ],

    performance: {
        hints: false,
    },
});
