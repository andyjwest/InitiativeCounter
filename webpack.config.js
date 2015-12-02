var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "js"),
    entry: {
        monsters: './index.js'
    },
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'jsx?harmony'],
                include: path.join(__dirname, 'js')
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './monsters.bundle.js' // Your appʼs entry point
]