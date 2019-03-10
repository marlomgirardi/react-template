const path = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (options) => ({
    mode: options.mode,
    entry: options.entry,
    output: {

        // Compile into js/build.js
        path: path.resolve('build'),
        publicPath: '/',
        ...options.output
    }, // Merge with env dependent settings
    optimization: options.optimization,
    module: {
        rules: [

            // Transform all .js files required somewhere with Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // SCSS to CSS
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',

                    // CSS module enabled
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },

                    // PostCSS
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: () => [
                                autoprefixer({
                                    browsers: '> 5%, last 2 Safari versions and > .5%, last 2 Edge versions and > .5%'
                                })
                            ]
                        }
                    },

                    // compiles Sass to CSS, using Node Sass by default
                    'sass-loader'
                ]
            },

            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: 'file-loader'
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {

                            // Inline files smaller than 10 kB
                            limit: 10 * 1024
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {

                                // NOTE: mozjpeg may causes errors in some Linux environments
                                enabled: true,
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }

        ]
    },
    plugins: options.plugins.concat([
        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; Terser will automatically
        // drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]),
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        plugins: [
            // Use components without redundant names.
            // import Comp from "./Comp/Comp"
            // can be import Compo from "./Comp" with this plugin
            new DirectoryNamedWebpackPlugin()
        ]
    },

    devtool: options.devtool,

    target: 'web', // Make web variables accessible to webpack, e.g. window

    performance: options.performance || {}
});
