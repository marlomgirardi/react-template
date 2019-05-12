const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const autoprefixer = require('autoprefixer')
const SizePlugin = require('size-plugin')

module.exports = options => ({
    mode: options.mode,

    entry: [
        // Use that if you need to support IE11
        // Require.resolve('react-app-polyfill/ie11'),
        path.join(process.cwd(), 'src/index.js') // Start with js/index.js
    ],

    output: {

        // Compile into js/build.js
        path: path.resolve('dist'),
        publicPath: '/',
        ...options.output
    }, // Merge with env dependent settings
    optimization: options.optimization,
    module: {
        rules: [
            // Transform all .js files required somewhere with Babel
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // Force every one to be aware of the lint roles but slow down the build process.
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
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
                            localIdentName: '[name]__[local]--[hash:base64:5]'
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

                    // Compiles Sass to CSS, using Node Sass by default
                    'sass-loader'
                ]
            }

            // {
            //     Test: /\.(eot|otf|ttf|woff|woff2)$/,
            //     Use: 'file-loader'
            // },

            // {
            //     Test: /\.(jpg|png|gif)$/,
            //     Use: [
            //         {
            //             Loader: 'url-loader',
            //             Options: {

            //                 // Inline files smaller than 10 kB
            //                 Limit: 10 * 1024
            //             }
            //         },
            //         {
            //             Loader: 'image-webpack-loader',
            //             Options: {
            //                 Mozjpeg: {

            //                     // NOTE: mozjpeg may causes errors in some Linux environments
            //                     Enabled: true,
            //                     Progressive: true
            //                 },
            //                 Gifsicle: {
            //                     Interlaced: false
            //                 },
            //                 Optipng: {
            //                     OptimizationLevel: 7
            //                 },
            //                 Pngquant: {
            //                     Quality: '65-90',
            //                     Speed: 4
            //                 },
            //                 Webp: {
            //                     Quality: 75
            //                 }
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: options.plugins.concat([
        // This simplifies creation of HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            inject: true,
            minify: {

                // Collapse white space that contributes to text nodes in a document tree
                collapseWhitespace: true,

                // Strip HTML comments
                removeComments: true
            },
            template: './src/index.html',
            filename: './index.html'
        }),

        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // Inside your code for any environment checks; Terser will automatically
        // Drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                DEBUG: process.env.DEBUG === 'true'
            }
        }),

        // Show file output
        new SizePlugin()
    ]),
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        plugins: [
            // Use components without redundant names.
            // Import Comp from "./Comp/Comp"
            // Can be import Compo from "./Comp" with this plugin
            new DirectoryNamedWebpackPlugin()
        ]
    },

    devtool: options.devtool,

    target: 'web', // Make web variables accessible to webpack, e.g. window

    performance: options.performance || {}
})
