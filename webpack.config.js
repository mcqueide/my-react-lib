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
    entry: path.resolve(__dirname, 'src/index.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '/lib'),
        filename: outputFile,
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
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};