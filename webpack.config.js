/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, mode;

if (env === 'build') {
    mode = 'production';
    outputFile = 'index.min.js';
} else {
    mode = 'development';
    outputFile = 'index.js';
}

module.exports = {
    mode: mode,
    entry: {
        'components/bundle' : path.resolve(__dirname, 'src/components/index.js'),
        'util/bundle' : path.resolve(__dirname, 'src/util/index.js')
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'),
            path.resolve('./src/components'),
            path.resolve('./src/util'),
        ],
        extensions: ['.json', '.js']
    }
};