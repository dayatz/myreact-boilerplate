var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'source-map',
    // devtool: 'cheap-module-source-maps',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
                // query: {
                //     presets: ['react', 'es2015']
                // }
            }
        ]
    }
    // plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //       'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //       comments: false
        //     },
        //     compress: {
        //       warnings: false,
        //       screw_ie8: true
        //     }
        // }),
        // new webpack.optimize.AggressiveMergingPlugin()
    // ]
}
