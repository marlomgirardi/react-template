const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const autoprefixer = require('autoprefixer')
const SizePlugin = require('size-plugin')

module.exports = options => ({
    ...options,

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
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
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
                                    overrideBrowserslist:
                                        '>2%, last 2 Chrome major versions, last 2 Firefox major versions, last 2 Safari major versions, last 2 Edge major versions, last 3 Android major versions, last 3 ChromeAndroid major versions, last 2 iOS major versions' // eslint-disable-line max-len
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
                DEBUG: process.env.DEBUG === 'true'
            }
        }),

        // Show file output
        new SizePlugin()
    ]),

    resolve: {
        ...options.resolve,
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        plugins: [
            // Use components without redundant names.
            // Import Comp from "./Comp/Comp"
            // Can be import Compo from "./Comp" with this plugin
            // This way you will not have a bunch of index.js as well.
            new DirectoryNamedWebpackPlugin()
        ]
    },

    target: 'web' // Make web variables accessible to webpack, e.g. window
})
