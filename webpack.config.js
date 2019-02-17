var path = require('path');
const pkg = require('./package.json');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/lib/index.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: 'index.js',
        library: pkg.name,
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};