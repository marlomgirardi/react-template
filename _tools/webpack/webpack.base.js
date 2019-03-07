const path = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = options => ({
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
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // USE IT IF YOU NEED THE CSS FROM node_modules
      // {
      //   // Preprocess 3rd party .css files located in node_modules
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ['style-loader', 'css-loader'],
      // },

      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },

      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                // NOTE: mozjpeg may causes errors in some Linux environments
                enabled: true,
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              webp: {
                quality: 75
              }
            },
          },
        ],
      },

    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    plugins: [
      // Use components without redundant names.
      // import Comp from './Comp/Comp'
      // can be import Compo from './Comp' with this plugin
      new DirectoryNamedWebpackPlugin()
    ]
  },

  devtool: options.devtool,

  target: 'web', // Make web variables accessible to webpack, e.g. window

  performance: options.performance || {},
});